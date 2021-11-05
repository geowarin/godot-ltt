"use strict";(self.webpackChunkgodot_ltt=self.webpackChunkgodot_ltt||[]).push([[589],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7313:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return g},default:function(){return b}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const d={sidebar_position:1},m="Create a Page",f={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",isDocsHomePage:!1,title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/godot-ltt/docs/tutorial-basics/create-a-page",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/godot-ltt/docs/intro"},next:{title:"Create a Document",permalink:"/godot-ltt/docs/tutorial-basics/create-a-document"}},g=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[],level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[],level:2}],y={toc:g};function b(e){var t,r=e,{components:n}=r,s=((e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),s),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"create-a-page"}),"Create a Page"),(0,a.kt)("p",null,"Add ",(0,a.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,a.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,a.kt)("h2",u({},{id:"create-your-first-react-page"}),"Create your first React Page"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'}),"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,a.kt)("p",null,"A new page is now available at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),(0,a.kt)("h2",u({},{id:"create-your-first-markdown-page"}),"Create your first Markdown Page"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'}),"# My Markdown page\n\nThis is a Markdown page\n")),(0,a.kt)("p",null,"A new page is now available at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}b.isMDXComponent=!0}}]);