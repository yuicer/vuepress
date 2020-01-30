(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{188:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p"),s._v(" "),e("h2",{attrs:{id:"postcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[s._v("#")]),s._v(" postCss")]),s._v(" "),e("h3",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("在之前使用 vue-cli webpack 模版的时候一直有个问题，它对有些 css 属性，例如多行溢出 "),e("code",[s._v("-webkit-box-orient: vertical;")]),s._v(" 在编译之后会被干掉，但是在热编译的时候却是存在的。之前因为一时找不到原因，而且时间紧所以没去仔细研究到底是什么导致了这个问题，为什么官方的模版会有这个问题。")]),s._v(" "),e("h3",{attrs:{id:"解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),e("ol",[e("li",[s._v("把下面对应的代码更改如下，即增加一个 "),e("code",[s._v("autoprefixer: false")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// webpack.prod.conf.js\nnew OptimizeCSSPlugin({\n  cssProcessorOptions: config.build.productionSourceMap\n    ? { safe: true, map: { inline: false }, autoprefixer: false}\n    : { safe: true }\n}),\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("或者使用一些内连的样式或者是在 index.html 这类不会被编译的文件里面去写样式。【为什么不在 static 里面，因为觉得路径管理很麻烦】")])]),s._v(" "),e("h3",{attrs:{id:"postcss-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postcss-2"}},[s._v("#")]),s._v(" postCss")]),s._v(" "),e("p",[s._v("首先肯定能明确它是一个编译问题，更准确一点是 webpack 在进行 build 打包的时候采取了某些策略干掉了这个样式。\n查找的时候发现是 autoprefixer 捣的鬼，而它是 postCss 其中的一个工具，所以就从头开始理一下")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[s._v("postCss"),e("OutboundLink")],1)]),s._v(" "),e("ul",[e("li",[e("p",[s._v("PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。")])]),s._v(" "),e("li",[e("p",[s._v("PostCSS 在工业界被广泛地应用，其中不乏很多有名的行业领导者，如：维基百科，Twitter，阿里巴巴， JetBrains。PostCSS 的 Autoprefixer 插件是最流行的 CSS 处理工具之一。")])]),s._v(" "),e("li",[e("p",[s._v("PostCSS 接收一个 CSS 文件并提供了一个 API 来分析、修改它的规则（通过把 CSS 规则转换成一个抽象语法树的方式）。在这之后，这个 API 便可被许多插件利用来做有用的事情，比如寻错或自动添加 CSS vendor 前缀。")])])]),s._v(" "),e("p",[s._v("个人理解可能比较像一种 css loader，它和 webpack 一样，也有很多的插件，而 autoprefixer 是其中比较出名的一个，它允许根据设置来自动增加 css 兼容或者删除一些老旧的样式，比如我们只用写 "),e("code",[s._v("transition: height 0.4s;")]),s._v(" 会自动编译成 "),e("code",[s._v("-webkit-transition: height 0.4s; transition: height 0.4s;")])]),s._v(" "),e("h3",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),e("p",[s._v("首先在 webpack 里面需要增加 postCss 的 loader")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.css$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        exclude"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/node_modules/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              importLoaders"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-loader'")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("然后去设置 postCss 的配置，这里设置有很多种方法，具体可以看"),e("a",{attrs:{href:"https://github.com/michael-ciniawsky/postcss-load-config",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("在 vue-cli 里面采用的是使用 "),e("code",[s._v(".postcssrc.js")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-import'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-url'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// to edit target browsers: use "browserslist" field in package.json')]),s._v("\n    autoprefixer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("以及在 package.json 中的 Browserslist\n"),e("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[s._v("Browserslist"),e("OutboundLink")],1),s._v(" 是用来配置浏览器兼容版本的工具，babel autoprefixer 等都可以根据在 Browserslist 中提供的需要兼容的浏览器版本进行有选择性的降级打包。"),e("a",{attrs:{href:"http://browserl.ist/?q=defaults",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个网站可以查询不同的配置兼容哪些浏览器 "),e("OutboundLink")],1),s._v("，一般来说我们配置成 defaults 就 👌，或者就用 vue-cli webpack 模版里的。")]),s._v(" "),e("p",[s._v("除了这种正规的使用 loader 的配置 autoprefixer 的，还有另外一个插件也捣了鬼 "),e("code",[s._v("OptimizeCSSPlugin")]),s._v("，\n实际上 loader 中的配置根本就没有去删除 "),e("code",[s._v("-webkit-box-orient: vertical;")]),s._v("，而是"),e("code",[s._v("OptimizeCSSPlugin")]),s._v(" webpack 插件干的事，loader 中的配置确实跟随了 "),e("code",[s._v("package.json")]),s._v(" 下的 "),e("code",[s._v("browserslist")]),s._v(" 去做对应浏览器中的配置。但是"),e("code",[s._v("OptimizeCSSPlugin")]),s._v("没有。如果直接将 "),e("code",[s._v("webpack.prod.conf.js")]),s._v(" 中的 "),e("code",[s._v("new OptimizeCSSPlugin")]),s._v(" 给注释掉就会发现多行的样式没有被编译干掉，显示回来了。")]),s._v(" "),e("h3",{attrs:{id:"optimizecssplugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optimizecssplugin"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://github.com/NMFR/optimize-css-assets-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("OptimizeCSSPlugin"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("那么这个东西到底是干什么用的呢，模版中解释如下")]),s._v(" "),e("blockquote",[e("p",[s._v("Compress extracted CSS. We are using this plugin so that possible duplicated CSS from different components can be deduped.")])]),s._v(" "),e("p",[s._v("官方解释如下")]),s._v(" "),e("blockquote",[e("p",[s._v("It will search for CSS assets during the Webpack build and will optimize \\ minimize the CSS (by default it uses cssnano but a custom CSS processor can be specified).")])]),s._v(" "),e("blockquote",[e("p",[s._v("Solves extract-text-webpack-plugin CSS duplication problem:\nSince extract-text-webpack-plugin only bundles (merges) text chunks, if its used to bundle CSS, the bundle might have duplicate entries (chunks can be duplicate free but when merged, duplicate CSS can be created).")])]),s._v(" "),e("p",[s._v("它也是一个用于压缩，优化 css 文件的插件，默认用的 cssnano 处理器。主要是对打包的 css 去重\n接下来跳到 "),e("a",{attrs:{href:"https://github.com/cssnano/cssnano",target:"_blank",rel:"noopener noreferrer"}},[s._v("cssnano"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("官方说明")]),s._v(" "),e("blockquote",[e("p",[s._v("cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.")])]),s._v(" "),e("blockquote",[e("p",[s._v("Our preset system allow you to load cssnano in a different configuration depending on your needs; the default preset performs safe transforms, whereas the advanced preset performs more aggressive transforms that are safe only when your site meets the requirements; but regardless of the preset you choose, we handle more than whitespace transforms!")])]),s._v(" "),e("blockquote",[e("p",[s._v("Optimisations range from compressing colors & removing comments, to discarding overridden at-rules, normalising unicode-range descriptors, even mangling gradient parameters for a smaller output value! In addition, where it's made sense for a transform, we've added Browserslist to provide different output depending on the browsers that you support.")])]),s._v(" "),e("p",[s._v("然后重点来了，他喵的这个玩意在 advanced 模式（OptimizeCSSPlugin 默认开了这个模式）下默认会启用 autoprefixer，但是它的这个模式和上面所说的 autoprefixer 并不一样！它只负责删除！\n"),e("code",[s._v("autoprefixer: Removes unnecessary prefixes based on the browsers option. Note that by default, it will not add new prefixes to the CSS file.")])]),s._v(" "),e("p",[s._v("所以这里就真相大白了。这个破玩意的设置导致了整个问题的发生，而且它藏的如此之深，and somehow 在 package.json 中的 Browserslist 并没有被它使用，它有一个自己单独得设置浏览器列表得选项，当没又被配置时就默认选择了比较高的版本配置，所以它就任性的删除了我们最开始的那一条样式"),e("code",[s._v("-webkit-box-orient: vertical;")])]),s._v(" "),e("p",[s._v("anyway 这个问题已经被人提过，而且已经被修复。。。\n"),e("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader/issues/281",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue1"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://github.com/cssnano/cssnano/issues/252",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue2"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://github.com/cssnano/cssnano/releases/tag/v4.0.0-rc.0",target:"_blank",rel:"noopener noreferrer"}},[s._v("release 4.0"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("By default, the following transforms are no longer applied to any input CSS.\nYou may see an increased output file size as a result:\n\nautoprefixer\npostcss-discard-unused\npostcss-merge-idents\npostcss-reduce-idents\npostcss-zindex\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("只是"),e("code",[s._v("OptimizeCSSPlugin")]),s._v("并没有跟新，所以这个问题依旧存在")]),s._v(" "),e("p",[s._v("anyway。。问题依旧没有那么简单，当把"),e("code",[s._v("OptimizeCSSPlugin")]),s._v("升级到 5.0 之后再运行，又报了一个新的错误")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" Cannot read property 'compilation' of undefined\n    at OptimizeCssAssetsWebpackPlugin.apply (/Users/mfw/mfw_webpack/activity_city/node_modules/last-call-webpack-plugin/src/index.js:170:20)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("= =. 跟到这里没想到又是一个坑。好吧，继续跟！")]),s._v(" "),e("p",[s._v("然鹅。。。发现了新版本只能在 webpack 4.0 中使用。so 如果想永久解决的话可能需要考虑下升级到 webpack4，但是升级到 webpack4 需要巨大的勇气，webpack4 本身还好，但是那一堆插件要找一个合适的能降级的就太麻烦了。")]),s._v(" "),e("p",[s._v("所以后续要不就整套升级 webpack4。要不就先使用上面说的方法先讲究使用")])])}),[],!1,null,null,null);t.default=n.exports}}]);