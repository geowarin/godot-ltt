"use strict";(self.webpackChunkgodot_ltt=self.webpackChunkgodot_ltt||[]).push([[610],{1284:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(7294),l=a(6010),n=a(780),s=a(9130),o="sidebar_q+wC",i="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",c="sidebarItem_cjdF",u="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",d=a(3084);function p({sidebar:e}){return 0===e.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},e.title),r.createElement("ul",{className:m},e.items.map((e=>r.createElement("li",{key:e.permalink,className:c},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))))))}var b=Object.defineProperty,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var N=function(e){const t=e,{sidebar:a,toc:s,children:o}=t,i=((e,t)=>{var a={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&E.call(e,r)&&(a[r]=e[r]);return a})(t,["sidebar","toc","children"]),m=a&&a.items.length>0;return r.createElement(n.Z,((e,t)=>{for(var a in t||(t={}))f.call(t,a)&&v(e,a,t[a]);if(h)for(var a of h(t))E.call(t,a)&&v(e,a,t[a]);return e})({},i),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:a})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),s&&r.createElement("div",{className:"col col--2"},s))))}},6345:function(e,t,a){a.d(t,{Z:function(){return T}});var r=a(7294),l=a(6010),n=a(3905),s=a(3084),o=a(9130),i=a(5026),m=a(2033),c=a(9389),u=a(1662),g="blogPostTitle_d4p0",d="blogPostData_-Im+",p="blogPostDetailsFull_xD8n",b=a(8901),h="image_9q7L";var f=function({author:e}){const{name:t,title:a,url:l,imageURL:n}=e;return r.createElement("div",{className:"avatar margin-bottom--sm"},n&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:h,src:n,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},E="authorCol_8c0z",v=Object.defineProperty,N=Object.defineProperties,P=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,w=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))_.call(t,a)&&w(e,a,t[a]);if(Z)for(var a of Z(t))y.call(t,a)&&w(e,a,t[a]);return e};function O({authors:e,assets:t}){return 0===e.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},e.map(((e,a)=>{var n,s,o;return r.createElement("div",{className:(0,l.Z)("col col--6",E),key:a},r.createElement(f,{author:(s=k({},e),o={imageURL:null!=(n=t.authorsImageUrls[a])?n:e.imageURL},N(s,P(o)))}))})))}var T=function(e){var t;const a=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:h}=(0,i.C)(),{children:f,frontMatter:E,assets:v,metadata:N,truncated:P,isBlogPostPage:Z=!1}=e,{date:_,formattedDate:y,permalink:w,tags:k,readingTime:T,title:j,editUrl:I,authors:L}=N,x=null!=(t=v.image)?t:E.image,M=!Z&&P,C=k.length>0;return r.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=Z?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:g,itemProp:"headline"},Z?j:r.createElement(o.Z,{itemProp:"url",to:w},j)),r.createElement("div",{className:(0,l.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:_,itemProp:"datePublished"},y),void 0!==T&&r.createElement(r.Fragment,null," \xb7 ",a(T))),r.createElement(O,{authors:L,assets:v}))})(),x&&r.createElement("meta",{itemProp:"image",content:h(x,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},f)),(C||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[p]:Z})},C&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":M})},r.createElement(b.Z,{tags:k})),Z&&I&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:I})),M&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":C})},r.createElement(o.Z,{to:N.permalink,"aria-label":`Read more about ${j}`},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9040:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),l=a(9130),n=a(1284),s=a(6345),o=a(3084),i=a(2033);function m(e){const{metadata:t,items:a,sidebar:m}=e,{allTagsPath:c,name:u,count:g}=t,d=function(){const{selectMessage:e}=(0,i.c2)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),p=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:d(g),tagName:u});return r.createElement(n.Z,{title:p,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,p),r.createElement(l.Z,{href:c},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((({content:e})=>r.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:!0},r.createElement(e,null)))))}},1662:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),l=a(3084),n=a(6010),s="iconEdit_mS5F",o=Object.defineProperty,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var g=e=>{var t=e,{className:a}=t,l=((e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(t,["className"]);return r.createElement("svg",((e,t)=>{for(var a in t||(t={}))m.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&u(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(s,a),"aria-hidden":"true"},l),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(2033);function p({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(g,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5818:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),l=a(6010),n=a(9130),s="tag_WK-t",o="tagRegular_LXbV",i="tagWithCount_S5Zl";var m=function(e){const{permalink:t,name:a,count:m}=e;return r.createElement(n.Z,{href:t,className:(0,l.Z)(s,{[o]:!m,[i]:m})},a,m&&r.createElement("span",null,m))}},8901:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),l=a(6010),n=a(3084),s=a(5818),o="tags_NBRY",i="tag_F03v";function m({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:i},r.createElement(s.Z,{name:e,permalink:t}))))))}}}]);