(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/8Qj":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD").d.p.withConfig({displayName:"textEllipsis__StyledText",componentId:"sc-57ceip-0"})(["overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;word-wrap:break-word;line-height:24px;height:","px;margin-bottom:5px;color:inherit;"],(function(e){return e.line||1}),(function(e){return 24*e.line||24}));t.a=function(e){var t=e.text,n=e.line,a=e.color;return i.a.createElement(r,{line:n,color:a},t)}},"Mg/N":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));var a=n("q1tI"),i=n.n(a),r=n("PZv5"),o=n("vrFN"),l=n("fHdJ"),c="1005851767";t.default=function(e){var t=e.location,n=e.pageContext,a=e.data,c=n.category;return i.a.createElement(r.a,{location:t,title:"Category: "+c,activeMenu:c},i.a.createElement("div",null,i.a.createElement(o.a,{title:"Category: "+c,keywords:[c]}),i.a.createElement(l.a,{data:a.allMarkdownRemark.edges,page:n,path:"/category/"+c,pageListSize:a.site.siteMetadata.pageListSize})))}},fHdJ:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Wbzz"),l=n("9eSz"),c=n.n(l),m=n("/8Qj"),u=n("quVb"),d=Object(r.d)(o.a).withConfig({displayName:"postListItem__PostItem",componentId:"sc-7t4oie-0"})(["display:flex;justify-content:space-between;margin-bottom:40px;"]),p=r.d.div.withConfig({displayName:"postListItem__TextContents",componentId:"sc-7t4oie-1"})(["display:flex;flex-direction:column;margin-right:20px;h2{margin:0;margin-bottom:5px;padding-bottom:0;border-bottom:none;color:",";}p:nth-child(2){color:",";}div{color:",";#circle{background-color:",";}}"],(function(e){return e.theme.postlistitem.title}),(function(e){return e.theme.postlistitem.content}),(function(e){return e.theme.postlistitem.info}),(function(e){return e.theme.postlistitem.info})),s=Object(r.d)(c.a).withConfig({displayName:"postListItem__Thumbnail",componentId:"sc-7t4oie-2"})(["width:120px;height:120px;border-radius:10px;"]),g=function(e){var t=e.node,n=!!t.frontmatter.cover;return i.a.createElement(d,{to:t.fields.slug},i.a.createElement(p,null,i.a.createElement("h2",null,i.a.createElement(m.a,{line:1,text:t.frontmatter.title})),i.a.createElement(m.a,{line:2,text:t.excerpt}),i.a.createElement(u.a,{date:t.frontmatter.date,category:t.frontmatter.category})),n&&i.a.createElement("div",null,i.a.createElement(s,{fixed:t.frontmatter.cover.childImageSharp.fixed})))},f=Object(r.d)(o.a).withConfig({displayName:"pageButton__StyledLink",componentId:"sc-1ftbz3r-0"})(["padding:0.5em;font-weight:bold;color:inherit;"]),h=r.d.li.withConfig({displayName:"pageButton__StyledButton",componentId:"sc-1ftbz3r-1"})(["display:inline-block;border-radius:3px;margin:10px;",";&:hover{color:",";background-color:",";}"],(function(e){return e.active?Object(r.c)(["color:",";background-color:",";"],(function(e){return e.theme.pagination.activeText}),(function(e){return e.theme.pagination.activeBack})):Object(r.c)(["color:",";"],(function(e){return e.theme.pagination.defaultText}))}),(function(e){return e.theme.pagination.activeText}),(function(e){return e.theme.pagination.activeBack})),v=function(e){var t=e.link,n=e.children,a=e.active;return i.a.createElement(h,{active:a},i.a.createElement(f,{to:t},n))},b=r.d.nav.withConfig({displayName:"pagination__StyledPagination",componentId:"mawr7h-0"})(["margin:1em auto;text-align:center;ul{list-style-type:none;margin:0;padding:0.5em;}"]),x=function(e){for(var t=e.page,n=e.path,a=e.listSize,r=t.numberOfPages,o=t.humanPageNumber,l=parseInt((o-1)/a)*a+1,c=l+a-1<r?l+a-1:r,m=Math.ceil(r/a),u=parseInt((o-1)/a)+1,d=u<=1?null:(u-1)*a,p=u<m?u*a+1:null,s=[],g=l;g<=c;g++){var f=1!==g?"/"+g:"/";g===o?s.push(i.a.createElement(v,{key:g,link:""+n+f,active:!0},g)):s.push(i.a.createElement(v,{key:g,link:""+n+f},g))}return i.a.createElement(b,null,i.a.createElement("ul",null,d&&i.a.createElement(v,{link:n+"/"+d},i.a.createElement("i",{className:"fas fa-chevron-left"})),s.length>0&&s,p&&i.a.createElement(v,{link:n+"/"+p},i.a.createElement("i",{className:"fas fa-chevron-right"}))))};t.a=function(e){var t=e.data,n=e.page,r=e.path,o=e.pageListSize;return i.a.createElement(a.Fragment,null,t.map((function(e){var t=e.node;return i.a.createElement(g,{key:t.fields.slug,node:t})})),n&&i.a.createElement(x,{page:n,path:r,listSize:o}))}},quVb:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Wbzz"),l=n("3r1a"),c=r.d.div.withConfig({displayName:"postInfo__Container",componentId:"par6p5-0"})(["font-size:",";span{vertical-align:middle;}a{color:inherit;vertical-align:middle;&:hover{text-decoration:underline;}}div{margin:0 10px;}"],(function(e){return e.size?e.size+"px":"13px"}));t.a=function(e){var t=e.category,n=e.date,r=e.size,m=e.link;return i.a.createElement(c,{size:r},t&&i.a.createElement(a.Fragment,null,m?i.a.createElement(o.a,{to:"/category/"+t},t):i.a.createElement("span",null,t),i.a.createElement(l.a,{size:"3"})),i.a.createElement("span",null,n))}}}]);
//# sourceMappingURL=component---src-components-templates-index-4-category-js-00e6c7944e90a612bcae.js.map