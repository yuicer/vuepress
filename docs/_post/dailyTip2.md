---
title: daily tip 02
date: 2019-12-09 16:28:40
tag: 砖头
img: /img/richang02.png
---

### webpack compile ts project to node & browser

excepting setting `libraryTarget: 'umd',`, you need also notice [globalObject](https://webpack.js.org/configuration/output/#outputglobalobject) wtf?

to avoid `default`

```js
import xxx from 'xxx'
const xxx = require('xxx').default
```

you need to add `libraryExport: 'default'` to support

```js
import xxx from 'xxx'
const xxx = require('xxx')
```