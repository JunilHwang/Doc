# Step3
주제 : this, 화살표 함수

## this
### by 정웅
- 예제에서 'this is test' 전역 객체에서 sayFoo 를 호출하였기 때문에 this는 전역 객체로 바인딩 된다. 
이때 this 바인딩 특성은 내부 함수 또는 callback 함수 호출했을 경우 에도 그대로 적용된다.

```javascript
var value = 100
var myObject = {
    value : 1,
    func1 : function()  {
        this.value += 1
        console.log('func1 called value is ' + this.value)
        func2 = function () {
            this.value += 1
            console.log('func2 called value is ' + this.value)
            func3 = function () {
                this.value += 1
                console.log('func3 called value is ' + this.value)
            }
            func3()
        }
        func2()
    }
}
myObject.func1()
/* 출력 결과
func1 called value is 2
func2 called value is 101
func3 called value is 102
*/
```
---
- 생성자 함수 동작 방식
new 연산자로 함수 호출시 동작 방식

1. 빈 객체 생성 및 this 바인딩
    - 가장 먼저 빈 객체가 생성된다
    - 이 객 체는 this로 바인딩 된다
    - 따라서 생성자 함수 코드 내부에서 this 는 이 빈 객체를 가리킨다
    - 여기서 엄밀히 따지면 빈 객체는 아니다 (아래 내용 참고)  
JS 객체 생성 규칙 👉 JS에서 모든 객체는 자신의 부모인 프로토 타입 객체와 연결되어 있으며 부모의 프로퍼티나 메서드를 사용할 수 있는데 생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토 타입 객체로 설정한다

2. this를 통한 프로퍼티 생성  
이후에 함수 코드 내부에서 this를 사용하여 앞에서 생성된 빈 객체에 동적으로 프로퍼티나 메서드를 생성할 수 있게 된다

3. 생성된 객체 리턴  
가장 일반적인 경우 특별한 리턴문이 없는 경우 this 로 바인딩 된 새로 생성한 객체가 리턴된다. 이는 명시적으로 this를 리턴한 값과 동일하다. this 가 아닌 객체를 리턴하는건 이후에 다루도록 한다.
```javascript
// 생성자 함수는 관례적으로 첫 글자는 대문자 이름 사용
var Person = function (name) {
    /* ⭐️ 아래 코드가 실행되기 전에 빈 객체를 생성 후 Person() 의
    prototype 프로퍼티가 가리키는 객체, Person.prototype,
    를 [[Prototype]] 링크로 연결하여
    자신의 프로토타입으로 설정 후 this로 바인딩 */
    this.name = name
    /* this가 가리키는 빈 객체에 동적으로 name 프로퍼티 생성 */
    /* 특별히 리턴값이 없는 경우 this로 바인딩된 이 객체가 리턴됨 */
}
var foo = new Person('foo')
```
---
- 리터럴 vs 생성자 객체 생성


```javascript
// 리터럴 방식 : 1 번만 생성 가능
var foo = {
    name : 'foo',
    age : 35,
    gender : 'man'
}
console.dir(foo)

/* 출력 결과
Object
age: 35
gender: "man"
name: "foo"
__proto__: Object */

// 생성자 함수 : 여러번 생성 가능
function Person (name, age, gender, position) {
    this.name = name
    this.age = age
    this.gender = gender
}

// Person 생성자 객체 생성
var bar = new Person ('bar', 33, 'woman')
console.dir(bar)

/* 출력 결과
Person
age: 33
gender: "woman"
name: "bar"
__proto__: Object */
```
리터럴 방식과 생성자 방식의 차이는 프로토타입 객체 (__proto__ 프로퍼티) 에 있다. 객체 리터럴의 경우 Object.prototype 을 생성자의 경우 Person.prototype 을 프로퍼티로 가진다.

이는 위에서 설명한 JS 객체 생성 규칙 에 따라 리터럴에선 객체 생성자가 Object() 이고 생성자에선 생성자가 Person() 함수이기 때문이다.

new 를 이용한 생성자 함수에서 this는 빈 객체에 바인딩 된다고 위에서 다루었다. 하지만 new 키워드 없이 생성자 함수를 호출하게 되면 빈 객체가 아닌 글로벌 객체에 this가 바인딩 되어 글로벌 객체에 프로퍼티를 생성한다. 즉, 끔찍한 일이 발생한다. 주의하자 !

---
일반 함수의 경우 모든 새로운 함수는 자신의 this 값이 JS 엔진에 동적으로 정해진다. 

### by 형욱
/*리터럴 방식과 생성자 함수의 차이
기본적으로 리터럴이란 컴퓨터쪽에서 소스 코드의 고정된 값을 대표하는 용어다.
고정된 값을 사용하는 리터럴 방식에 비해 생성자 함수는 필요에 따라 다양한 프로퍼티를 가지는 객체를 생성할수있다.
 */
 
---
 
 /* 화살표 함수(this에 바인딩할 객체가 정적)  vs 일반 함수(this에 바인딩할 객체가 동적) => this의 차이

### by 노원
- addEventListener 함수는 콜백 함수를 선언할 때 자신의 this 를 상속하도록 설정되어 있다.

### by 준일
```text
실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다.
전역 공간에서 자동으로 생성되는 전연 컨텍스트
eval함수
함수 실행에 의한 컨텍스트
실행 컨텍스트 객체는 활성화 되는 시점에 VariableEnviroment, LexcialEnvrionment, ThisBinding의 세 가지 정보를 수집한다.
실행 컨텍스트를 생서할 때 VariableEnvironment와 LexicalEnvironment가 동일한 내용으로 구성된다.
LexicalEnvironment는 함수 실행 도중에 변경되는 사항이 즉시 반영된다.
LexicalEnvironment와 VariableEnvironment는 다음과 environmentRecord와 outerEnvironmentReference로 구성돼 있다.
environmentRecord는 매개변수 식별자, 변수 식별자, 선언한 함수의 식별자 등을 수집한다.
이것 때문에 호이스팅이라는 개념이 사용된다.
호이스팅은 코드 해석을 좀 더 수월하게 하기 위해 environmentRecord의 수집 과정을 추상화한 개념이다.
변수 선언부와 함수 선언문에 호이스팅이 발생한다.
함수 표현식을 사용할 경우 함수의 선언부만 호이스팅이 발생한다.
outerEnvironmentReference는 상위(직전) 컨텍스트의 LexcicalEnviroment 정보를 참조한다.
이것 때문에 스코프가 형성되고, 스코프 체인을 통해 상위 컨텍스트에 접근할 수 있다.
스코프는 변수의 유효범위를 말한다.  
```
  
### by 유림
- [참고] 함수 vs 메서드  
어떤 함수를 실행하는 방법은 여러 가지가 있는데, 대표적인 방법은 함수로서 호출하는 경우와 메서드로서 호출하는 경우이다.
    ```javascript
    
    var func = function (x){
        console.log(this, x);
    };
    func(1) // Window { ... } 1 => 함수로서 호출됨
    
    var obj = {
        method: func  // obj 객체의 method 프로퍼티에 앞에서 만든 func 함수를 할당
    };
    obj.method(1); // { method: f } 1 => 메서드로서 호출됨
    obj['method'](2); // { method: f } 2 => 메서드로서 호출됨
    ```

### to 노원
- 출처를 남겨주세요.
- this 가 선언되는 구역에 따라 의미가 달라진다. `함수와 메소드를 분리하는 기능을 한다.` 
가 이해가 잘 안됩니다.
- 처음 본 내용이, 구글에서도 안나오는데 출처가 어떻게되나요?  
`자바스크립트에서 함수와 메소드를 구분하는 기준은 객체에 대하여 독립되어있는가의 여부이다.
  객체 내에 할당된다고 해서 무조건 메소드가 아니라. 객체의 메소드로서 호출이 되어야 메소드로 간주할 수 있다.`


## 화살표 함수
### by 정웅
코드 바로 바깥 함수 또는 class 의 this 값이 사용 된다.

---
- 메소드로 화살표 함수 ⭐️
```javascript
const Person = {
    name : 'JeongShin',
    // this 가 해당 객체에 바인딩 되지 않고 전역 객체를 가리킴
    sayName: () => console.log(`Hi my name is ${this.name}`)
}
Person.sayName() // Hi my name is undefined
```
위의 일반 함수가 해당 메서드를 호출한 함수에 this 가 바인딩 되는것과 다르게 동작한다.

--- 
  
- 화살표 콜백 함수  
콜백 함수를 화살표 함수로 정의하면 아래와 같은 실수가날 수 있다.
```javascript
var btn = document.getElementById('button')
btn.addEventListener('click', () =>{
    console.log(this === window); // this 가 전역 객체에 바인딩
    this.innerHTML = 'btn clicked'
})
```
화살표 함수에서 this 는 전역 객체이다. 따라서 btn 에 this 를 바인딩 하기 위해서는

오타난 부분 ` function => ()` 수정
```javascript
var btn = document.getElementById('button')
btn.addEventListener('click', function () {
    console.log(this === btn); // this 가 btn 에 바인딩
    this.innerHTML = 'btn clicked'
})
```
와 같이 해주면 된다.

### to 정웅
Q. 화살표 함수는 생성자로 사용할 수 없다. 왜 화살표 함수에는 생성자가 없을까? 자바스크립트의 철학이 궁금하다.  
자바스크립트에서는 new 키워드와 함수명을 더해주어 해당 함수를 생성자로 사용한다. 하지만 화살표 함수는 생성자로 사용할 수 없다.

---


### to 형욱
개념이 깔끔하게 잘 정리되어 있어서 복습할때 유용했습니다.

---
Q. 실행결과에서 어떻게 ...bar() 가 가리키는 this 가 call 과 무관하게 동작되나요? 
```javascript
function createObject() {
    console.log('Inside `createObject`:', this.foo, this);
    return {
        foo: 42,
        bar: function() {
            console.log('Inside `bar`:', this.foo, this);
        },
    };
}
createObject.call({foo: 21}).bar();

/*
Inside `createObject`: 21, {foo: 21}
Inside `bar`: 42, bar: f
*/
```
A. 
