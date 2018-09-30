(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/api.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),m=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js");function c(e,n){if(null==e)return{};var t,a,m=function(e,n){if(null==e)return{};var t,a,m={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(m[t]=e[t]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}n.default=function(e){var n=e.components;c(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"api"}},"API"),m.a.createElement(o.MDXTag,{name:"blockquote",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"blockquote"},"const { consume, mutate, getState } = createStore(initialState)")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u4f7f\u7528 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"createStore()")," \u521b\u5efa\u4e00\u4e2a store \u793a\u4f8b\uff0c\u4f7f\u7528 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"consume")," \u8bbf\u95ee state\uff0c\u4f7f\u7528 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mutate")," \u66f4\u65b0 state\u3002\u5efa\u8bae\u4f7f\u7528\u591a Store \b\u6765\u7ba1\u7406\u7684\u9879\u76ee\u3002"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\b\b\u5b9e\u9645\u9879\u76ee\u4e2d store \u6587\u4ef6\u63a8\u8350\u8fd9\u6837\u7ec4\u7ec7:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import { createStore } from 'stamen'\n\nconst { consume, mutate } = createStore({ count: 1 })\n\nconst actions = {\n  increment() {\n    mutate(state => state.count++)\n  },\n  decrement() {\n    mutate(state => state.count--)\n  },\n  asyncIncrement() {\n    setTimeout(() => {\n      mutate(state => {\n        state.count++\n      })\n    }, 1000)\n  },\n  async asyncDecrement() {\n    await new Promise((resolve, _) => {\n      setTimeout(() => {\n        resolve()\n      }, 1000)\n    })\n    mutate(state => state.count--)\n  },\n}\n\nexport { consume, mutate, actions }\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u5efa\u8bae ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"state")," \u548c ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"actions")," \u653e\u5728\u4e00\u4e2a\u6587\u4ef6\u5185, \u5c3d\u91cf\u8ba9\u6bcf\u4e2a store \b\u7b80\u5355\uff0c\u5982\u679c\u4ee5 store \u592a\u590d\u6742\b\u7684\u8bdd\uff0c\u5efa\u8bae\u62c6\u6210\u591a\u4e2a store\u3002"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"consume"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"consume()")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528 state, state \u6539\u53d8\u540e\u7ec4\u4ef6\u56de\u81ea\u52a8 re-render\u3002"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u9996\u5148\uff0c\u4f60\u9700\u8981\u65b0\u5efa\u4e00\u4e2a store\uff0c\u4f8b\u5982:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"const { consume, mutate } = createStore({\n  count: 1,\n  info: {\n    name: 'Counter',\n  },\n})\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"\u7b80\u5355\u7528\u6cd5")),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"<span>{consume(state => state.count)}</span>\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"\u4f7f\u7528selector")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u4f7f\u7528selector\u80fd\u83b7\u5f97\u7684\u66f4\u597d\u7684\u6027\u80fd\uff0c\u80fd\u51cf\u5c11\u7ec4\u4ef6\u91cd\u590d\u6e32\u67d3\uff0c\u63a8\u8350\u591a\u4f7f\u7528 selector."),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"<span>{consume(state => state.info.name, name => name)}</span>\n")),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"mutate"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"mutate()")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Action \u662f\u4e00\u4e2a\u5185\u90e8\u8c03\u7528\u4e86 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mutate()")," \u7684\u666e\u901a\u51fd\u6570, \u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u5730\u65b9\u8c03\u7528 action: stateless \u7ec4\u4ef6\u5185\u3001React \u751f\u547d\u5468\u671f\u51fd\u6570\u5185\u3001\u751a\u81f3\u5728\u7ec4\u4ef6\u5916\uff0c\u6240\u4ee5\u4f60\u5e76\u4e0d\u9700\u8981\u7c7b\u4f3c connect \u6216\u8005 inject \u8fd9\u6837\u7684 HOC\u3002"),m.a.createElement(o.MDXTag,{name:"p",components:n},"State \u662f immutable \u7684, \u4f46\u4f60\u80fd\u4f7f\u7528 mutable \u65b9\u5f0f ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mutate")," \u6765\u751f\u6210\u65b0\u7684\uff0c\u5728\u5904\u7406\u590d\u6742 store \u65f6\u975e\u5e38\u91cd\u8981\uff0c\u8fd9\u662f",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/mweststrate/immer"}},"immer")," \u7684\u5f3a\u5927\u4e4b\u5904\uff0c\u591a\u4e8f immer\u3002"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"function increment() {\n  mutate(state => {\n    state.count++\n  })\n}\n")),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"getstate"}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"getState()")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u83b7\u53d6\u5f53\u524d\u7684 state"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"const { getState } = createStore({ count: 1 })\nconst currentState = getState()\n")))}}}]);