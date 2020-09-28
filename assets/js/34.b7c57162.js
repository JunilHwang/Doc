(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{436:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-메모리-누수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-메모리-누수"}},[t._v("#")]),t._v(" JS 메모리 누수 "),a("a",{attrs:{href:"https://itstory.tk/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98%EC%9D%98-4%EA%B0%80%EC%A7%80-%ED%98%95%ED%83%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("🔗"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/dev/core-javascript/가비지 컬렉션.html"}},[t._v("Garbage Collection")])],1),t._v(" "),a("h2",{attrs:{id:"메모리-누수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메모리-누수"}},[t._v("#")]),t._v(" 메모리 누수")]),t._v(" "),a("p",[t._v("어플리케이션에서 더이상 사용되지 않지만, 운영체제나 사용가능한 메모리풀에 반환 되지 않는 메모리.")]),t._v(" "),a("h3",{attrs:{id:"메모리-누수의-문제점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메모리-누수의-문제점"}},[t._v("#")]),t._v(" 메모리 누수의 문제점")]),t._v(" "),a("ul",[a("li",[t._v("GC가 있어도 메모리 누수에 완전히 벗어날 수 없다.")]),t._v(" "),a("li",[t._v("특정 메모리가 실제 사용중인지는 개발자만 분명하게 알 수 있다.")]),t._v(" "),a("li",[t._v("메모리 누수는 어플리케이션의 속도 저하, 충돌, 지연시간 증가 뿐만 아니라 다른 어플리케이션에도 악 영향을 끼친다.")])]),t._v(" "),a("h3",{attrs:{id:"todo-악영향의-예시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo-악영향의-예시"}},[t._v("#")]),t._v(" "),a("code",[t._v("TODO")]),t._v(" 악영향의 예시")]),t._v(" "),a("h3",{attrs:{id:"자바스크립트에서-메모리-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자바스크립트에서-메모리-관리"}},[t._v("#")]),t._v(" 자바스크립트에서 메모리 관리")]),t._v(" "),a("p",[t._v("이전에 할당한 메모리가 여전히 사용중인지 주기적으로 검사한다.")]),t._v(" "),a("h3",{attrs:{id:"자바스크립트에서의-메모리-누수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자바스크립트에서의-메모리-누수"}},[t._v("#")]),t._v(" 자바스크립트에서의 메모리 누수")]),t._v(" "),a("p",[t._v("주요 원인은 '예상치 못한 참조(unwanted references)'")]),t._v(" "),a("h2",{attrs:{id:"mark-and-sweep-알고리즘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mark-and-sweep-알고리즘"}},[t._v("#")]),t._v(" Mark and Sweep 알고리즘")]),t._v(" "),a("p",[t._v("JS 에서 GC가 메모리가 "),a("code",[t._v("다른 코드에서 접근될 수 있는지 확인")]),t._v("할 수 있는 방법")]),t._v(" "),a("ol",[a("li",[t._v("GC는 "),a("code",[t._v("roots")]),t._v("(전역변수)의 목록을 생성")]),t._v(" "),a("li",[t._v("모든 루트들에 폐기되지 않도록, 활성화 상태를 표시한다.\n"),a("ul",[a("li",[t._v("자식들도 재귀적으로 검사")]),t._v(" "),a("li",[t._v("루트에 도달할 수 있는 자식 객체도 폐기 되지 않는다.")])])]),t._v(" "),a("li",[t._v("GC는 활성화 상태가 아닌 메모리들을 해제하여 OS에 반환함.")])]),t._v(" "),a("h3",{attrs:{id:"예상치-못한-참조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예상치-못한-참조"}},[t._v("#")]),t._v(" 예상치 못한 참조")]),t._v(" "),a("ul",[a("li",[t._v("개발자가 더이상 사용되지 않을거라 예상했지만, 활성화 상태인 루트트리에 존재하는 메모리 조각들.")]),t._v(" "),a("li",[t._v("더이상 참조되지 않지만, 코드상 어디엔가 유지되어 해제되지 못한 변수들.")])]),t._v(" "),a("h2",{attrs:{id:"js-메모리-누수의-일반적인-형태"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-메모리-누수의-일반적인-형태"}},[t._v("#")]),t._v(" JS 메모리 누수의 일반적인 형태")]),t._v(" "),a("h3",{attrs:{id:"_1-우발적으로-형성된-전역변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-우발적으로-형성된-전역변수"}},[t._v("#")]),t._v(" 1. 우발적으로 형성된 전역변수")]),t._v(" "),a("p",[t._v("아래의 bar, variable 은 전역객체의 프로퍼티.")]),t._v(" "),a("p",[t._v("선언되지 않은 변수 (ES6 이전)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a hidden global variable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("this")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"potential accidental global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("this 는 호출 문맥에 따라 결정되기 때문이다.")]),t._v(" "),a("p",[t._v("전역변수 사용후 null 처리/재할당 한다.")]),t._v(" "),a("h3",{attrs:{id:"_2-잊혀진-타이머와-콜백"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-잊혀진-타이머와-콜백"}},[t._v("#")]),t._v(" 2. 잊혀진 타이머와 콜백")]),t._v(" "),a("p",[t._v("interval 핸들러가 수집되지 않으면, 의존 객체들도 수집되지 않음.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" someResource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do stuff with node and someResource. ")]),t._v("\n        node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someResource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Observer와 관련 참조 (click 이벤트)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do stuff ")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[t._v("과거, IE 의 GC 버그로 (DOM 노드와 자바스크립트 코드 사이의 순환 참조"),a("code",[t._v("TODO")]),t._v(")를 탐지하지 못했다.")]),t._v(" "),a("ul",[a("li",[t._v("메모리 누수가 발생하게 되었고 개발자들은 명시적으로 참조를 제거하기 시작했습니다.")])]),t._v(" "),a("p",[t._v("이제는 사이클을 잘 처리하지 못하는 오래된 브라우저에서도,")]),t._v(" "),a("p",[t._v("요소가 범위를 벗어날 때, element 와 onClick 이 모두 수집됩니다.")]),t._v(" "),a("p",[t._v("즉, 노드가 제거되기 전에 removeEventListener 를 호출할 필요가 없어졌다.")]),t._v(" "),a("h3",{attrs:{id:"_3-dom-에서의-외부-참조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-dom-에서의-외부-참조"}},[t._v("#")]),t._v(" 3. DOM 에서의 외부 참조")]),t._v(" "),a("p",[t._v("DOM 노드를 자료구조 안에 유지할 경우. 테이블의 여러행을 빨리 업데이트 할 수 있는 장점이 있다.")]),t._v(" "),a("p",[t._v("그러나 이 때, DOM 노드는 DOM 트리와 elements 자료구조 두 곳에서 참조가 이루어 진다.")]),t._v(" "),a("p",[a("code",[t._v("document.body.removeChild(document.getElementById('button'));")])]),t._v(" "),a("p",[t._v("DOM 트리에서 제거 되어도")]),t._v(" "),a("p",[t._v("자료구조에서는 여전히 참조하고 있기 때문에 메모리 누수가 생김.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    image"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doStuff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://some.url/image'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Much more logic ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeButton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The button is a direct child of body. ")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 여기서 elements 에서 여전히 button 참조를 가지고 있습니다. ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이 경우 button element는 여전히 메모리에 상주하게 되며 GC에 의해 수집될 수 없습니다. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-클로저"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-클로저"}},[t._v("#")]),t._v(" 4. 클로저")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" theThing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("replaceThing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" originalThing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" theThing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("unused")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalThing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    theThing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        longStr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("someMethod")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someMessage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 만약 여기에 `originalThing = null` 를 추가한다면, 메모리 누수는 사라질 것 입니다. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("replaceThing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"클로저가-생성되는-이유"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#클로저가-생성되는-이유"}},[t._v("#")]),t._v(" 클로저가 생성되는 이유")]),t._v(" "),a("ul",[a("li",[t._v("setInterval 은 첫번째 인자가 callback 함수임. replaceThing 은 반환되고 있다는 의미.")]),t._v(" "),a("li",[t._v("replaceThing 의 내부 변수가 외부변수 theThing 을 참조하고 있음.")])]),t._v(" "),a("h3",{attrs:{id:"replacething-이-호출될-때-마다-클로저-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacething-이-호출될-때-마다-클로저-생성"}},[t._v("#")]),t._v(" replaceThing 이 호출될 때 마다 클로저 생성.")]),t._v(" "),a("ol",[a("li",[t._v("theThing 에 할당하는 행위.")]),t._v(" "),a("li",[t._v("unused 에서 originalThing(theThing) 을 참조")])]),t._v(" "),a("h3",{attrs:{id:"unused-내부-함수가-없을-때-originalthing-thething-이-사용되지-않을때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unused-내부-함수가-없을-때-originalthing-thething-이-사용되지-않을때"}},[t._v("#")]),t._v(" unused 내부 함수가 없을 때 (originalThing[theThing] 이 사용되지 않을때)")]),t._v(" "),a("ul",[a("li",[t._v("replaceThing 함수는 매번 실행 시 길이가 큰 문자열을 생성")]),t._v(" "),a("li",[t._v("최신 JS 엔진(V8)은 originalThing 이 사용되지 않음을 파악하고\n이전 값을 메모리 해제하여 일정 메모리 사용량을 유지시켜 줍니다.(?)")])]),t._v(" "),a("h3",{attrs:{id:"unused-내부-함수의-originalthing-을-참조-todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unused-내부-함수의-originalthing-을-참조-todo"}},[t._v("#")]),t._v(" unused 내부 함수의 originalThing 을 참조 "),a("code",[t._v("TODO")])]),t._v(" "),a("ul",[a("li",[t._v("비록 unused 가 사용하지 않더라도 이 코드가 반복적으로 실행될 때 마다 메모리 사용량이 꾸준히 증가")]),t._v(" "),a("li",[t._v("최신 자바스크립트 엔진은 1 depth 의 미사용 클로저에 대한 스코프를 클린징 해주지만 2 depth 부터는 안된다는 뜻")]),t._v(" "),a("li",[t._v("본질적으로 클로저의 참조고리가 생성되고(theThing 변수를 루트로),\n이 클로저의 범위에는 큰 사이즈의 배열에 대한 간접적인 참조를 동반하기 때문에 상당한 양의 메모리 누수가 발생하게 됩니다.")])]),t._v(" "),a("h2",{attrs:{id:"_5-gc-의-비직관적인-동작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-gc-의-비직관적인-동작"}},[t._v("#")]),t._v(" 5. GC 의 비직관적인 동작")]),t._v(" "),a("p",[t._v("언제 수집될 지 모름.\n그러나 대부분의 GC는 "),a("code",[t._v("메모리 할당")]),t._v("이 이뤄질 때 수집하고,\n그 외는 유휴 상태")]),t._v(" "),a("p",[a("code",[t._v("TODO")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("사이즈가 큰 데이터 할당을 여러번 수행합니다.\nGarbage Collector에 의해 대부분(혹은 전부)은 더 이상 접근되지 않는다라고 표시가 됩니다.\n(더 이상 사용하지 않은 경우 null 로 초기화 했다고 가정)\n더 이상의 할당을 수행하지 않습니다.\n이 시나리오에서 대부분의 GC들은 더 이상 수집을 수행하지 않습니다. \n즉, 더 이상 접근되지 않는 데이터 셋들이 남아있음에도 불구하고 수집이 일어나지 않습니다. \n이는 엄격히 메모리 누수는 아니지만, 일반적인 메모리 사용량보다 더 많은 메모리를 사용하게 됩니다.\nhttps://developer.chrome.com/devtools/docs/demos/memory/example2\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);