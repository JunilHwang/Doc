(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{442:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),a("ul",[a("li",[t._v("ES6 추가된 새로운 primitive type")]),t._v(" "),a("li",[t._v("객체가 아닌 값으로 인식")]),t._v(" "),a("li",[t._v("typeof 로 보면 Symbol 타입이 나온다.")]),t._v(" "),a("li",[t._v("primitive 이지만 객체의 키로 사용할 수 있는 특징이 있다.")]),t._v(" "),a("li",[t._v("Symbol.iterator 는 이터레이터 오브젝트를 생성하면서 반환한다.")]),t._v(" "),a("li",[t._v("오브젝트의 [Symbol.iterator]를 호출하면 이터레이터 오브젝트를 생성하여 반환한다.")]),t._v(" "),a("li",[t._v("심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용한다.")])]),t._v(" "),a("p",[t._v("Symbol() 로 부터 반환되는 모든 심볼 값은 고유하다.")]),t._v(" "),a("ul",[a("li",[t._v("심볼 데이터 형식의 유일한 목적"),a("br"),t._v("\n: 심볼 값은 객체 프로퍼티에 대한 식별자로 사용한다.")])]),t._v(" "),a("p",[t._v("평소에는 거의 쓸일이 없다. 그러나 자바스크립트 내부적으로는 상당히 많이 쓰이며 알아두면 유용한 경우도 있다.")]),t._v(" "),a("ul",[a("li",[t._v("라이브러리를 제작할 때,\n"),a("ul",[a("li",[t._v("정확한 심볼이 아니면 조회가 불가능하기 때문에 다른 사용자가 악용할 여지도 없다.")]),t._v(" "),a("li",[t._v("네이밍이 충돌해서 문제가 생길여지도 없다.")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'creator'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zerocho'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("creator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'creator'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'zerocho'")]),t._v("\n")])])]),a("p",[t._v("iterator 에서 symbol 은 표시되지 않는다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [a, b] ")]),t._v("\n")])])]),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("https://feel5ny.github.io/2019/02/03/JS_19/")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.zerocho.com/category/ECMAScript/post/58ef98a6177375001892f891",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zerocho"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);