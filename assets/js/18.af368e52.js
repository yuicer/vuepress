(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{193:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[e._v("#")]),e._v(" intro")]),e._v(" "),a("p",[e._v("Today we will see the new features of the github "),a("strong",[a("a",{attrs:{href:"https://github.com/features/package-registry?utm_source=announcement&utm_medium=email&utm_campaign=ww-gpr-beta",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Package Registry"),a("OutboundLink")],1),e._v(" !")])]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=N_-Cu9_2YAA",target:"_blank",rel:"noopener noreferrer"}},[e._v("videos from 7:00"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("since I receive the mail of the gihub that they offered me beta access to GitHub Package Registry. I decide to have a look what's new here.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("configuration"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"authenticating-to-github-package-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authenticating-to-github-package-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Authenticating to GitHub Package Registry")]),e._v(" "),a("p",[e._v("before we start this part, we need to know what's the "),a("strong",[a("a",{attrs:{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[e._v("github access token"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("well, we often ues ssh-key for a authenticating of github or gitlab, [ if you do not know what's the ssh, please check "),a("a",{attrs:{href:"https://help.github.com/en/articles/connecting-to-github-with-ssh",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" ], but sometimes, we can not use ssh connect, so if we only have https connect, we will need to provide account & password or the "),a("strong",[e._v("token")])]),e._v(" "),a("p",[e._v("we can enter the setting page of the github, and click the "),a("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer settings"),a("OutboundLink")],1),e._v(",we will see "),a("strong",[e._v("Personal access tokens")]),e._v(" on the left sidebar.\nthen we need to click the "),a("strong",[e._v("Generate new token")]),e._v(" button to "),a("strong",[a("a",{attrs:{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[e._v("get a token"),a("OutboundLink")],1)])]),e._v(" "),a("blockquote",[a("p",[e._v("You must use a personal access token with the read:packages and write:packages scopes to publish and delete public packages in the GitHub Package Registry with npm. Your personal access token must also have the repo scope when the repository is private.")])]),e._v(" "),a("p",[e._v("we can do like this, and click generate token.")]),e._v(" "),a("blockquote",[a("p",[e._v("Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.")])]),e._v(" "),a("p",[e._v("now we have the token, so we can use it to authenticate.")]),e._v(" "),a("h3",{attrs:{id:"login-to-github-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login-to-github-npm","aria-hidden":"true"}},[e._v("#")]),e._v(" login to github npm")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ npm login --registry=https://npm.pkg.github.com --scope=@YOURNAME\n> Username: USERNAME\n> Password: TOKEN\n> Email: PUBLIC EMAIL ADDRESS\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("USERNAME will be your github name, TOKEN will be the token we had generated just now")]),e._v(" "),a("p",[e._v("if success, you will see "),a("code",[e._v("Logged in as USERNAME on https://npm.pkg.github.com/.")])]),e._v(" "),a("h3",{attrs:{id:"publish-your-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-your-package","aria-hidden":"true"}},[e._v("#")]),e._v(" Publish your package")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("you will create a repo on github, name it "),a("code",[e._v("hello")]),e._v(", and then git clone your repo to local")])]),e._v(" "),a("li",[a("p",[e._v("create .npmrc file "),a("code",[e._v("echo registry=https://npm.pkg.github.com/USERNAME > .npmrc")]),e._v(", we have to specify the registry so npm will know this is a github package")])]),e._v(" "),a("li",[a("p",[e._v("verify the package.json filed "),a("code",[e._v("name")]),e._v(" to be a scoped package, just like "),a("code",[e._v("@USERNAME/hello")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("npm publish")]),e._v(", if success , you will see your package at "),a("code",[e._v("https://github.com/USERNAME/hello/packages")])])]),e._v(" "),a("li",[a("p",[e._v("additional, if you want to publish a published package, you need to edit the package.json file, adding the flowing part")])])]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"publishConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"registry"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://npm.pkg.github.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"access"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"public"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"install-a-github-packge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-a-github-packge","aria-hidden":"true"}},[e._v("#")]),e._v(" install a github packge")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Also need .npmrc to specify which npm origin will be used "),a("code",[e._v("echo registry=https://npm.pkg.github.com/USERNAME > .npmrc")])])]),e._v(" "),a("li",[a("p",[e._v("npm install @USERNAME/hello")])])])])},[],!1,null,null,null);t.default=n.exports}}]);