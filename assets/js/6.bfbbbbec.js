(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(t,e,a){"use strict";var r=a(28);a.n(r).a},187:function(t,e,a){"use strict";a.r(e);var r=a(33),n=a(34),s=a(32),i={components:{Common:r.a,NoteAbstract:n.a,Pagation:s.a},data:()=>({currentPage:1}),computed:{posts(){let t=this.$category.posts;return t.sort((t,e)=>this._getTimeNum(e)-this._getTimeNum(t)),t},title(){return this.$page.frontmatter.title.split("|")[0]}},methods:{getCurrentTag(t){this.$emit("currentTag",t)},getCurrentPage(t){this.currentPage=t,this.$page.currentPage=t},_getTimeNum:t=>parseInt(new Date(t.frontmatter.date).getTime())}},o=(a(179),a(0)),u=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories-wrapper"},[a("Common",{attrs:{sidebar:!1,isComment:!1}},[a("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),a("note-abstract",{attrs:{data:t.posts,currentPage:t.currentPage},on:{currentTag:t.getCurrentTag}}),t._v(" "),a("pagation",{attrs:{data:t.posts,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1)],1)},[],!1,null,"c711aa42",null);e.default=u.exports},28:function(t,e,a){}}]);