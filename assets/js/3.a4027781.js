(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(t,e,s){},154:function(t,e,s){},155:function(t,e,s){},156:function(t,e,s){},157:function(t,e,s){},158:function(t,e,s){},159:function(t,e,s){},169:function(t,e,s){"use strict";var n=s(153);s.n(n).a},170:function(t,e,s){"use strict";var n=s(154);s.n(n).a},171:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},172:function(t,e,s){"use strict";var n=s(155);s.n(n).a},173:function(t,e,s){"use strict";var n=s(156);s.n(n).a},174:function(t,e,s){"use strict";var n=s(157);s.n(n).a},175:function(t,e,s){"use strict";var n=s(158);s.n(n).a},176:function(t,e,s){"use strict";var n=s(159);s.n(n).a},177:function(t,e,s){"use strict";s.r(e);const n=["s","/"];var i={data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$pagination,s=this.$site.themeConfig.searchMaxSuggestions||5,n=this.$localePath,i=e=>e&&e.title&&e.title.toLowerCase().indexOf(t)>-1,o=[];for(let t=0;t<e.length&&!(o.length>=s);t++){const a=e[t];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(i(a))o.push(a);else if(a.headers)for(let t=0;t<a.headers.length&&!(o.length>=s);t++){const e=a.headers[t];i(e)&&o.push(Object.assign({},a,{path:a.path+"#"+e.slug,header:e}))}}return o},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(e=>t.path.match(e)).length>0},onHotkey(t){t.srcElement===document.body&&n.includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},o=(s(169),s(0)),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?s("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,n){return s("li",{staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[s("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[s("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?s("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports,r=s(4),l={props:{item:{required:!0}},computed:{link(){return Object(r.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:r.b,isMailto:r.c,isTel:r.d,focusoutAction(){this.$emit("focusout")}}},u=Object(o.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isExternal(t.link)?s("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n")]):s("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,c={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},h=(s(170),Object(o.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null).exports),f=s(171),p=s.n(f),d={components:{NavLink:u,DropdownTransition:h},data:()=>({open:!1}),props:{item:{required:!0}},computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},methods:{toggle(){this.open=!this.open},isLastItemOfArray:(t,e)=>p()(e)===t},watch:{$route(){this.open=!1}}},g=(s(172),{components:{NavLink:u,DropdownLink:Object(o.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[s("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[s("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),s("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),s("DropdownTransition",[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,n){return s("li",{key:e.link||n,staticClass:"dropdown-item"},["links"===e.type?s("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?s("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(n){return s("li",{key:n.link,staticClass:"dropdown-subitem"},[s("NavLink",{attrs:{item:n},on:{focusout:function(s){t.isLastItemOfArray(n,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)}),0):s("NavLink",{attrs:{item:e},on:{focusout:function(s){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,n=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(i=>{const o=t[i],a=n[i]&&n[i].label||o.lang;let r;return o.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,i),s.some(t=>t.path===r)||(r=i)),{text:a,link:r}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(r.e)(t),{items:(t.items||[]).map(r.e)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:`https://github.com/${t}`:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const n=e[s];if(new RegExp(n,"i").test(t))return n}return"Source"}}});s(173);function m(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var v={components:{NavLinks:Object(o.a)(g,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.userLinks.length||t.repoLink?s("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return s("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?s("DropdownLink",{attrs:{item:t}}):s("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?s("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.repoLabel))]):t._e()],2):t._e()},[],!1,null,null,null).exports,SearchBox:a},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(m(this.$el,"paddingLeft"))+parseInt(m(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},k=(s(174),{components:{Navbar:Object(o.a)(v,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"navbar"},[s("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?s("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?s("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),s("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[s("SearchBox"),t._v(" "),s("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports},computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar},t]}}}),_=(s(175),s(176),Object(o.a)(k,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-container",class:this.pageClasses},[this.shouldShowNavbar?e("Navbar"):this._e(),this._v(" "),e("div",{staticClass:"wrapper"},[this._t("default")],2)],1)},[],!1,null,"e233e1e2",null));e.default=_.exports}}]);