---
title: Counting Shape
date: 2019/12/01 08:30:45
img: /img/20191201.png
tag: 油彩
---

### 前言

今天看到一个面试题 【平面上有若干个不特定的形状，如上图所示。请写程序求出物体的个数，以及每个不同物体的面积】

> 原来是烂大街的题目。。。完全不知道

首先需要

解法如下【打开控制台可看见结果】

<iframe src="/demo/demo_191201/index.html" frameborder="no" marginwidth="0" marginheight="0" height="0" width="0" scrolling="no"></iframe>

```js

<script>
  const ctx = document.createElement('canvas').getContext('2d')
  const img = new Image()
  img.src = '/img/20191201.png'

  img.onload = function() {
    ctx.drawImage(img, 0, 0, 40, 40)
    const originData = ctx.getImageData(0, 0, 40, 40)

    console.log('originData', originData)
    formatArr(originData.width, originData.height, originData.data)
  }

  function formatArr(width, height, arr) {
    const foo = []

    // 合并 rgba 通道
    const bar = new Array(width * height).fill(0)
    arr.forEach((x, index) => {
      bar[Math.floor(index / 4)] += x === 255 ? 0 : 1
    })
    console.log('rgba 通道合并后结果数组', bar)

    // 构造二维数组，二维数组长度为图形宽度
    bar.forEach((x, index) => {
      let i = index % width,
        j = Math.floor(index / width)

      foo[i] = foo[i] || []
      foo[i][j] = x
    })

    console.log('转置为二维数组', foo)
    breadthFirstSearch(JSON.parse(JSON.stringify(foo)))
  }

  // 计算有多少个图形，以及各自面积
  // 思路，遍历数组，找到为1的就开始路径搜素，递归走完【右下左上】，走完的部分置为 0。当全部走完，就可以得出面积。
  // 全部走完后，构造新的对象再次进行上述操作。最终得出结果
  function breadthFirstSearch(twiceArr) {
    const BasicObj = class {
      constructor() {
        this.hasEnd = false
        this.points = []
        this.areaSize = 0
      }
    }

    const result = [new BasicObj()]

    function setState({ xAxis, yAxis, isOver }) {
      if (isOver) {
        result[0].hasEnd = true
        return
      }
      if (result[0].hasEnd) result.unshift(new BasicObj())

      result[0].areaSize++
      result[0].points.push({ x: xAxis, y: yAxis })
    }

    // 一层循环
    for (let i = 0, l = twiceArr.length; i < l; i++) {
      // 二层
      for (let ii = 0, ll = twiceArr[i].length; ii < ll; ii++) {
        if (twiceArr[i][ii] !== 0) {
          // 开始广搜
          let tempList = [{ x: ii, y: i }]
          let nextList = []
          while (tempList.length !== 0) {
            tempList.forEach(({ x, y }) => {
              if (twiceArr[y][x]) {
                twiceArr[y][x] = 0
                setState({ xAxis: x, yAxis: y })

                // 右
                if (twiceArr[y] && twiceArr[y][x + 1]) {
                  nextList.push({ x: x + 1, y: y })
                }
                // 下
                if (twiceArr[y + 1] && twiceArr[y + 1][x]) {
                  nextList.push({ x: x, y: y + 1 })
                }
                // 左
                if (twiceArr[y] && twiceArr[y][x - 1]) {
                  nextList.push({ x: x - 1, y: y })
                }
                // 上
                if (twiceArr[y - 1] && twiceArr[y - 1][x]) {
                  nextList.push({ x: x, y: y - 1 })
                }
              }
            })
            tempList = nextList
            nextList = []
            if (tempList.length === 0) setState({ isOver: true })
          }
        }
      }
    }

    console.log('result', result)
  }
</script>

```
