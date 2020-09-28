(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{434:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"async-iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-iterator"}},[t._v("#")]),t._v(" Async Iterator")]),t._v(" "),a("h2",{attrs:{id:"computer-science-의-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computer-science-의-loop"}},[t._v("#")]),t._v(" Computer Science 의 loop")]),t._v(" "),a("h3",{attrs:{id:"_1-iteration-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-iteration-loop"}},[t._v("#")]),t._v(" 1. Iteration loop")]),t._v(" "),a("h3",{attrs:{id:"_2-recursion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-recursion"}},[t._v("#")]),t._v(" 2. Recursion")]),t._v(" "),a("ul",[a("li",[t._v("어딘가로 이동하면 그 다음으로 이동할 포인터가 있을 때")]),t._v(" "),a("li",[t._v("이미 구조가 있는 것을 순회하는 것")])]),t._v(" "),a("h3",{attrs:{id:"corecursion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#corecursion"}},[t._v("#")]),t._v(" CoRecursion")]),t._v(" "),a("ul",[a("li",[t._v("recursion 의 반대")]),t._v(" "),a("li",[t._v("이미 만들어있는 구조를 순회하는 것이 아니라, 작은 힌트로부터 구조를 만들어낸다")]),t._v(" "),a("li",[t._v("range(1, 10)")]),t._v(" "),a("li",[t._v("제너레이터의 목적")])]),t._v(" "),a("h2",{attrs:{id:"async-iterator-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-iterator-2"}},[t._v("#")]),t._v(" Async Iterator")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Symbol.iterator")]),t._v(" 대신, "),a("code",[t._v("Symbol.asyncIterator")])]),t._v(" "),a("li",[a("code",[t._v("next()")]),t._v(" 는 Promise 를 반환")]),t._v(" "),a("li",[a("code",[t._v("for await (let item of iterable)")]),t._v(" 반복문")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" range "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for await..of 최초 실행 시, Symbol.asyncIterator가 호출됩니다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncIterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (1)")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Symbol.asyncIterator 메서드는 이터레이터 객체를 반환합니다.")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이후 for await..of는 반환된 이터레이터 객체만을 대상으로 동작하는데,")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 다음 값은 next()에서 정해집니다.")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   current"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   last"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for await..of 반복문에 의해 각 이터레이션마다 next()가 호출됩니다.")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (2)")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  next()는 객체 형태의 값, {done:.., value :...}를 반환합니다.")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (객체는 async에 의해 자동으로 프라미스로 감싸집니다.)")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 비동기로 무언가를 하기 위해 await를 사용할 수 있습니다.")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (3)")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" done"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" done"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// next() 는 promise 를 반환하기 때문에 result 를 얻기 위해 await 를 붙여주어야 한다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (4)")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1,2,3,4,5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("... spread operator"),a("br"),t._v(" "),a("code",[t._v("alert( [...range] ); // Symbol.iterator가 없기 때문에 에러 발생")])]),t._v(" "),a("h2",{attrs:{id:"reference-comment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-comment"}},[t._v("#")]),t._v(" Reference & Comment")]),t._v(" "),a("ul",[a("li",[t._v("https://gitlab.com/siots-study/topics/-/wikis/asyncronous")]),t._v(" "),a("li",[t._v("https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF")]),t._v(" "),a("li",[t._v("https://helloworldjavascript.net/pages/285-async.html")]),t._v(" "),a("li",[t._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all")]),t._v(" "),a("li",[t._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race")]),t._v(" "),a("li",[t._v("https://ko.javascript.info/async")]),t._v(" "),a("li",[t._v("https://ko.javascript.info/generators-iterators")]),t._v(" "),a("li",[t._v("https://www.bsidesoft.com/8325")]),t._v(" "),a("li",[t._v("https://www.bsidesoft.com/6037")])])])}),[],!1,null,null,null);s.default=e.exports}}]);