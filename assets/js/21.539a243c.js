(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{182:function(t,e,o){"use strict";o.r(e);var s=o(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"webpack-compile-ts-project-to-version-using-in-node-or-browser"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webpack-compile-ts-project-to-version-using-in-node-or-browser"}},[t._v("#")]),t._v(" webpack compile ts project to version using in node or browser")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("excepting setting "),o("code",[t._v("output.libraryTarget: 'umd',")]),t._v(", you need also set "),o("code",[t._v("output.globalObject: this")]),t._v(" "),o("a",{attrs:{href:"https://webpack.js.org/configuration/output/#outputglobalobject",target:"_blank",rel:"noopener noreferrer"}},[t._v("globalObject"),o("OutboundLink")],1),t._v(" wtf?")])]),t._v(" "),o("li",[o("p",[t._v("to avoid annoying "),o("code",[t._v("default")]),t._v(" below\nyou need to add "),o("code",[t._v("libraryExport: 'default'")]),t._v(" to solve that")])])]),t._v(" "),o("div",{staticClass:"language-js line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxx "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xxx "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxx "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xxx "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[t._v("1")]),o("br"),o("span",{staticClass:"line-number"},[t._v("2")]),o("br"),o("span",{staticClass:"line-number"},[t._v("3")]),o("br"),o("span",{staticClass:"line-number"},[t._v("4")]),o("br"),o("span",{staticClass:"line-number"},[t._v("5")]),o("br")])]),o("form",[o("table",[o("thead",[o("tr",[o("th",[t._v("pattern")]),t._v(" "),o("th",[t._v("export commonJS")]),t._v(" "),o("th",[t._v("consume from common js")]),t._v(" "),o("th",[t._v("export from ESM")]),t._v(" "),o("th",[t._v("consume from ESM")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1: normal export")]),t._v(" "),o("td",[o("code",[t._v("module.exports.cool =")])]),t._v(" "),o("td",[o("code",[t._v('const { cool } = require("x")')])]),t._v(" "),o("td",[o("code",[t._v("export const cool = ")])]),t._v(" "),o("td",[o("code",[t._v('import { cool } from "x"')])])]),t._v(" "),o("tr",[o("td",[t._v("2: default export")]),t._v(" "),o("td",[o("code",[t._v("module.exports.default = ")]),t._v(" (not a special case!)")]),t._v(" "),o("td",[o("code",[t._v('const { default } = require("x")')])]),t._v(" "),o("td",[o("code",[t._v("export default ...")])]),t._v(" "),o("td",[o("code",[t._v('import cool from "x"')]),t._v(" (any other name works as well)*")])]),t._v(" "),o("tr",[o("td",[t._v("3: replace entire module export")]),t._v(" "),o("td",[o("code",[t._v("module.exports = something cool")])]),t._v(" "),o("td",[o("code",[t._v('const cool = require("x")')])]),t._v(" "),o("td",[t._v("Not possible! People "),o("em",[t._v("try")]),t._v(" to achieve this with "),o("code",[t._v("default")]),t._v(", but it's an entirely different beast")]),t._v(" "),o("td",[o("code",[t._v('import * as cool from "X"')])])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);