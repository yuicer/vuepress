(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{336:function(t,e,s){"use strict";s.r(e);var a=s(3),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"git-delete-origin-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-delete-origin-tag"}},[t._v("#")]),t._v(" git delete origin tag")]),t._v(" "),s("div",{staticClass:"language-s line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git push origin --delete <tagname>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"lerna-skip-partial-packages-using-leran-publish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna-skip-partial-packages-using-leran-publish"}},[t._v("#")]),t._v(" lerna: skip partial packages using leran publish")]),t._v(" "),s("p",[t._v("lerna did support "),s("code",[t._v("lerna run xxx --scope pkg1")]),t._v(". but "),s("code",[t._v("scope")]),t._v(" do not work when using "),s("code",[t._v("publish")])]),t._v(" "),s("p",[t._v("there has a lot of issues about this, but none of them mentioned how to solve it, cause the maintainer insist that")]),t._v(" "),s("blockquote",[s("p",[t._v("Because it breaks the fundamental mechanism Lerna uses to determine which packages need to be published? Absolutely nothing stopping you from not placing several packages in the same monorepo that apparently shouldn't be."),s("br"),t._v("\n------ @evocateur")])]),t._v(" "),s("blockquote",[s("p",[t._v("As I noted above, this is impossible due to the manner in which lerna coordinates versions with git tags (and the diff since the last one is what indicates which packages should be published).\n------ @evocateur")])]),t._v(" "),s("blockquote",[s("p",[t._v("If they are both independent, and you don’t want to publish them at the same time, then don’t use lerna, it’s clearly not necessary for your use case.\n------ @evocateur")])]),t._v(" "),s("p",[t._v("util..... I fonud "),s("a",{attrs:{href:"https://github.com/lerna/lerna/commit/a9b9f97457e4e4b0cac7f4ce562458d921a1f9be",target:"_blank",rel:"noopener noreferrer"}},[t._v("this_commit"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("I test the "),s("code",[t._v("lerna publish --no-private")]),t._v(", it did work for me on version 3.22.1")]),t._v(" "),s("p",[t._v("but stil "),s("code",[t._v("lerna publish --help")]),t._v(" did not show this config 😃")]),t._v(" "),s("h2",{attrs:{id:"yarn-workspace-nohoist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-workspace-nohoist"}},[t._v("#")]),t._v(" yarn workspace nohoist")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://classic.yarnpkg.com/blog/2018/02/15/nohoist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc_here"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("workspaces looks good. but sometimes it's not so that smart. it juset can't completely figure out the package should place in the root node_modules or the child project node_modules")]),t._v(" "),s("p",[t._v("so like the artificial intelligence, it need some help.")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// root package.json")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"workspaces"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"packages"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nohoist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/@types/node"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"unhandledrejection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unhandledrejection"}},[t._v("#")]),t._v(" unhandledRejection")]),t._v(" "),s("p",[t._v("In frontend project, sometimes, somehow, there will be somewhy error like "),s("code",[t._v("unhandledRejection")])]),t._v(" "),s("p",[t._v("but this error do not show where it is 😦")]),t._v(" "),s("p",[t._v("so with the code below, you can catch them easily!")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unhandledRejection'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Unhandled Rejection at: Promise'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reason:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// application specific logging, throwing an error, or other logic here")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"disable-ds-store-auto-generated-in-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-ds-store-auto-generated-in-mac"}},[t._v("#")]),t._v(" disable .ds_store auto generated in mac")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/.DS_Store",target:"_blank",rel:"noopener noreferrer"}},[t._v(".DS_Store"),s("OutboundLink")],1),t._v(" "),s("code",[t._v("defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE")])]),t._v(" "),s("h2",{attrs:{id:"make-alias-with-zsh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-alias-with-zsh"}},[t._v("#")]),t._v(" make alias with zsh")]),t._v(" "),s("p",[s("code",[t._v('alias [custom-alias]="[command]"')]),t._v("\nexample\n"),s("code",[t._v('alias devbox="ssh xxx@xx.xx.xx.xx"')])]),t._v(" "),s("h2",{attrs:{id:"dyld-brew"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dyld-brew"}},[t._v("#")]),t._v(" dyld brew")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.64.dylib\n  Referenced from: /usr/local/bin/node\n  Reason: image not found\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("this problem is causing by error link node version. you can use "),s("code",[t._v("brew upgrade node")]),t._v(" or "),s("code",[t._v("brew upgrade")]),t._v(" to upgrade all packages.")])])}),[],!1,null,null,null);e.default=n.exports}}]);