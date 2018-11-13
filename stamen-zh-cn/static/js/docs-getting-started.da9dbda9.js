(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/getting-started.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),m=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var t,a,m=function(e,n){if(null==e)return{};var t,a,m={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(m[t]=e[t]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}n.default=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"\u5feb\u901f\u5f00\u59cb"}},"\u5feb\u901f\u5f00\u59cb"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"\u5b89\u88c5"}},"\u5b89\u88c5"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"yarn add stamen\nnpm i stamen\n")),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"\u57fa\u672c\u7528\u6cd5"}},"\u57fa\u672c\u7528\u6cd5"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import React from 'react'\nimport { render } from 'react-dom'\nimport { createStore } from 'stamen'\n\nconst { consume, mutate } = createStore({ count: 1 })\n\nconst App = () => (\n  <div>\n    <span>{consume(state => state.count)}</span>\n    <button onClick={() => mutate(state => state.count--)}>-</button>\n    <button onClick={() => mutate(state => state.count++)}>+</button>\n  </div>\n)\n\nrender(<App />, document.getElementById('root'))\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Check on CodeSandbox: ",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://codesandbox.io/s/0vrrlkjx5w"}},"Basic")," | ",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://codesandbox.io/s/kmq65p3l97"}},"Async")),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"\u4f8b\u5b50"}},"\u4f8b\u5b50"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/forsigner/stamen/tree/master/examples/basic"}},"Basic")," - \u6700\u7b80\u5355\u7528\u6cd5\u4f8b\u5b50"),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/forsigner/stamen/tree/master/examples/async"}},"Async")," - \u5f02\u6b65\u53d1\u8bf7\u6c42\u83b7\u53d6\u8fdc\u7a0b\u6570\u636e"),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/forsigner/stamen/tree/master/examples/todomvc"}},"TodoMVC"),"  - stamen \u5b9e\u73b0 TodoMVC"),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/forsigner/stamen/tree/master/examples/recommended-usage"}},"Recommended usage")," - \u9879\u76ee\u4e2d stamen \u7684\u63a8\u8350\u7528\u6cd5")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u672c\u5730\b\u8fd0\u884c\u4f8b\u5b50"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"git clone https://github.com/forsigner/stamen\ncd stamen/examples/basic\n# cd stamen/examples/async\n# cd stamen/examples/todomvc\nyarn \nyarn start\n")))}}}]);