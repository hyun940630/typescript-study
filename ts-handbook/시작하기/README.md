# 시작하기

<br />

> `React`와 `React Native`으로 개발해오며 지금까지 JavaScript(ES6)를 주로 사용해왔습니다. 따라서 `TS for JS Programmer`를 제외한 나머지 Section은 가볍운 정리만 하겠습니다.

<br />
<br />
<br />

## TS for the New Programmer

### JavaScript의 짧은 역사(What is JavaScript? A Brief History)

JS는 처음에 브라우저를 위한 스크립팅 언어로 만들어졌습니다. 그러나 요즘날 많은 개발자들은 오직 JavaScript만을 이용하여 전체 스택을 프로그래밍하고 있습니다.

<br />

JavaScript에는 다양한 별난 점(이상한 점과 놀랄만한 점)이 있으며 이 문제점에서 시작되어 TS가 만들어졌습니다.
예를 들어 JavaScript의 동일 연산자(`==`) 인수를 강제로 변환하여(coerces), 예기치 않은 동작을 유발합니다.

```js
if ('' == 0) {
    // true. why?
}
if (1 < x < 3) {
    // 어떤 x 값이던 true
}
```

<br />

대부분의 프로그래밍 언어는 이런 종류의 오류들을 잡아서 표출해주고, 일부는 코드가 실행되기 전인 컴파일 중에 오류를 표출해줍니다. 작은 프로그램을 작성할 경우에는 이런 이상한 점들이 화를 만들기도 하지만 관리는 가능합니다. 그러나 수백 또는 수천 줄의 어플리케이션을 작성할 경우 이런 지속적 놀라움(이상한 점)들은 심각한 문제입니다.

<br />
<br />

### TypeScript: 정적 타입 검사자(TypeScript: A Static Type Checker)

TypeScript와 JavaScript는 어떤 관계일까요?

#### 구문(Syntax)

TS는 JS 구문이 허용되는, JS의 **상위집합** 언어입니다. 구문은 프로그램을 만들기 위해 코드를 작성하는 방법을 의미합니다. 예를 들어, 다음 코드는 `)`이 없으므로 **구문** 오류입니다.

```js
// @errors: 1005
let a = (4
```

TS는 독특한 구문 때문에 JS를 오류로 보지 않습니다. 즉, 어떻게 작성돼있는지 모르지만 작동하는 JS 코드를 TS 파일에 넣어도 잘 작동합니다.

<br />

#### 타입(Types)

TS는 다른 종류의 값들을 사용할 수 있는 방법이 추가된 타입이 있는 상위 집합입니다.

```js
console.log(4 / []);
```

**구문적으로 옳은(syntactically-legal)** 위 코드는 JS에서 `NaN`을 출력합니다. 그러나 TS는 배열로 숫자를 나누는 연산이 옳지 않다고 판단하고 오류를 발생시킵니다.

```ts
// errors: 2363
console.log(4 / []);
```

이 처럼 TS의 타입 검사자는 일반적인 오류를 최대한 많이 검출하면서 올바른 프로그램을 만들 수 있게 설계되었습니다.
만약 JS 파일의 코드를 TS 코드로 옮기면, 코드를 어떻게 작성했는지에 따라 **타입 오류** 를 볼 수 있습니다. 이는 코드 상의 문제이거나, TS가 지나치게 보수적인 것일 수 있습니다.

<br />

#### 런타임 특성(Runtime Behavior)

> 런타임(Runtime)?
> TS는 JS의 **런타임 특성** 을 가진 프로그래밍 언어입니다. 예를 들어, JS에서 0으로 나누는 행동은 런타임 예외로 처리하지 않고 `Infinity` 값을 반환합니다. 논리적으로, TS는 JS 코드의 런타임 특성을 **절대** 변화시키지 않습니다.

즉, TS가 코드에 타입 오류가 있음을 검출해도, JS 코드를 TS로 이동시키는 것은 같은 방식으로 실행시킬 것을 보장합니다.

JS와 동일한 런타임 동작을 유지하는 것은 프로그램 작동을 중단시킬 수 있는 미묘한 차이를 걱정하지 않고 두 언어 간에 쉽게 전환할 수 있도록 하기 위한 TS의 기본적인 약속입니다.

<br />

#### 삭제된 타입(Erased Types)

계략적으로, TS의 컴파일러가 코드 검사를 마치면 타임을 삭제해서 결과적으로 **"컴파일된"** 코드를 만듭니다. 즉, 코드가 한 번 컴파일되면, 결과로 나온 일반 JS 코드에는 타입 정보가 없습니다.

타입정보가 없는 것은 TS가 추론한 타입에 따라 프로그램의 특성을 변화시키지 않는다는 의미입니다. 결론적으로 컴파일 도중에는 타입 오류가 표출될 수 있지만, 타입 시스템 자체는 프로그램이 실행될 때 작동하는 방식과 관련이 없습니다.

마지막으로, JS는 추가 런타임 라이브러리를 제공하지 않습니다. TS 프로그램은 JS 프로그램과 같은 표준 라이브러리(또는 외부 라이브러리)를 사용하므로, TS 관련 프레임워크를 추가적으로 공부할 필요가 없습니다.

<br />

### JavaScript와 TypeScript 학습(Learning JavaScript and TypeScript)

JavaScript를 배우고 TypeScript를 학습하세요!

<br />
<br />
<br />

## TS for OOP Programmer

✋🏻

<br />
<br />
<br />

## TS for Functional Programmers

✋🏻

<br />
<br />
<br />

## TS for the JS Programmer

<br />

TS는 JS 위에 레이어로서 자리잡고 있는데, JS의 기능들을 제공하면서 그 위에 자체 레이어를 추가합니다. 이 레이어가 TS 타입 시스템입니다.

JS는 이미 `String`, `number`, `object`, `undefined` 같은 원시 타입을 가지고 있지만, 전체 코드베이스에 일관되게 할당되었는지는 미리 확인해 주지 않습니다. TS는 이 레이어로서 동작합니다.

### 타입 추론(Types by Inference)

TypeScript는 JavaScript 언어를 알고 있으며 대부분의 경우 타입을 생성해줄 것이빈다. 예를 들어 변수를 생성하면서 동시에 특정 값에 할당하는 경우, TS는 그 값을 해당 변수의 타입으로 사용할 것입니다.

```js
let helloWorld = 'Hello World';
//   ^?  helloWorld라는 변수는 "Hello World"를 베이스로 타입을 결정합니다.
```

JS가 동작하는 방식을 이해함으로써 TS는 JS 코드를 받아들이면서 타입을 가지는 타입 시스템을 구축할 수 있습니다. 이는 코드에서 타입을 명시하기 위해 추가로 문자를 사용할 필요가 없는 타입 시스템을 제공합니다. 이것이 위의 예제에서 TS가 `helloWorld`가 `String`임을 알게 되는 방식입니다.

<br />

### 타입 정의하기(Defining Types)

JS는 다양한 디자인 패턴을 가능하게 하는 동적 언어입니다. 몇몇 디자인 패턴은 자동으로 타입을 제공하기 힘들 수 있는데 (동적 프로그래밍을 사용하고 있을 것이기 때문에) 이러한 경우에 TS는 타입이 무엇이 되어야 하는지 명시 가능한 JS 언어의 확장을 지원합니다.

<br />

다음은 `name: string`과 `id: number`을 포함하는 추론 타입을 가진 객체를 생성하는 예제입니다.

```ts
const user = {
    name: 'Hayes',
    id: 0,
};
```

이 객체의 형태를 명시적으로 나타내기 위해서는 `interface`로 선언합니다.

```ts
interface User {
    name: string;
    id: number;
}
```

이제 변수 선언 뒤에 `: TypeName`의 구문을 사용해 JS 객체가 새로운 `interface`의 형태를 따르고 있음을 선언할 수 있습니다.

```ts
interface User {
    name: String;
    id: number;
}
// ---cut---
const user: User = {
    name: 'Hayes',
    id: 0,
};
```

해당 인터페이스에 맞지 않은 객체를 생성하면 TS는 **경고** 를 줍니다.

```ts
//@errors: 2322
interface User {
    name: string;
    id: number;
}

const user: User = {
    username: 'Hayes', // User에서 정의한 객체 요소가 아닙니다!
    id: 0,
};
```

JS는 클래스와 객체 지향 프로그래밍을 지원하기 때문에, TS 또한 동일합니다. - 인터페이스는 클래스로도 선언할 수 있습니다.

```ts
interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount('Murphy', 1);
```

인터페이스는 함수에서 매개변수와 리턴 값을 명시하는데 사용되기도 합니다.

```ts
//@noErrors
interface User {
    name: string;
    id: number;
}

// ---cut---
function getAdminUser(): User {
    // ...
}

function deleteUser(user: User) {
    // ...
}
```

JavaScript에서 사용할 수 있는 적은 종류의 원시 타입이 있습니다. `boolean`, `bigint`, `null`, `number`, `string`, `symbol`, `object`와 `undefined`는 인터페이스에서 사용할 수 있습니다.
TS는 몇 가지 타입을 추가해 인터페이스를 확장했습니다. 예를 들어, `any`(어떤 타입이든 허용합니다.), `unknown`(이 타입을 사용하는 사람이 어떤 타입으로 선언했는가 확인하세요.), `never`(이 타입은 발생될 수 없습니다.), `void`(`undefined`를 리턴하거나 리턴 값이 없는 함수입니다.)가 있습니다.

타입을 구축하기 위한 두 가지 구문이 있다는 것을 알 수 있을 것입니다. Interfaces and Types - `interface`를 우선적으로 사용하고 특정기능이 필요한 경우에만 `type`를 사용해야합니다.

-   내용을 덧붙여 둘중 어느 것을 사용던 프로젝트에서 통일성있게 사용하는 것이 중요합니다.

<br />

### 타입 구성(Composing Types)

객체들을 조합하여 더 크고 복잡한 객체를 만드는 방법과 유사하게 TS에 타입으로 이를 수행하는 도구가 있습니다. 여러가지 타입을 이용하여 새 타입을 작성하기 위해 일상적인 코드에서 가장 많이 사용되는 두 가지 코드로는 `유니언(Union)`과 `제네릭(Generic)`이 있습니다.

#### 유니언(Unions)

**유니언은 타입이 여러 타입 중 하나일 수 있음을 선언하는 방법입니다.** 예를 들어, `boolean` 타입을 `true` 또는 `false`로 설명할 수 있습니다.

```ts
type MyBool = true | false;
```

참고: `MyBool` 위에 마우스를 올린다면, `boolean`으로 분류된 것을 볼 수 있습니다. - 구조적 타입 시스템의 프로퍼티

유니언 타입이 가장 많이 사용된 사례 중 하나는 값이 다음과 같이 허용되는 `string` 또는 `number`의 리터럴집합을 설명하는 것입니다.

```ts
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unclocked';
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

유니언은 다양한 타입을 처리하는 방법을 제공하는데, 예를 들어 `array` 또는 `string`을 받는 함수가 있을 수 있습니다.

```ts
function getLength(obj: string | string[]) {
    return obj.length;
}
```

TS는 코드가 시간에 따라 변수가 변경되는 방식을 이해하며, 이러한 검사를 사용해 타입을 골라낼 수 있습니다.

|   Type    |             Predicate              |
| :-------: | :--------------------------------: |
|  string   |      `typeof s === "string"`       |
|  number   |      `typeof n === "number"`       |
|  boolean  |      `typeof b === "boolean"`      |
| undefined | `typeof undefined === "undefined"` |
| function  |     `typeof f === "function"`      |
|   array   |         `Array.isArray(a)`         |

예를 들어, `typeof obj === "string"`을 이용하여 `string`과 `array`를 구분할 수 있으며 TS는 객체가 다른 코드 경로에 있음을 알게 됩니다.

```ts
function wrapInArray(obj: string | string[]) {
    if (typeof obj === 'string') {
        return [obj];
        //      ^?
    } else {
        return obj;
    }
}
```

<br />

#### 제네릭 (Generics)

TS 제네릭 시스템에 대해 자세히 알아볼 수 있지만, 간단하게 설명해서 **제네릭은 타입에 변수를 제공하는 방법입니다.**

배열이 일반적인 예시이며, 제네릭이 없는 배열은 어떤 것이든 포함할 수 있습니다. **제네릭이 있는 배열은 배열 안의 값을 설명할 수 있습니다.**

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

제네릭을 사용하는 고유타입을 선언할 수 있습니다.

```ts
// @errors: 2345
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// 이 줄은 TS에 backpack이라는 상수가 있음을 알리는 지름길이며
// const backpack: Backpack<string>이 어디서 왔는지 걱정할 필요가 없습니다.
declare const backpack: Backpack<string>;
// ^? : declare는 컴파일러에게 이것(보통 변수)이 이미 존재하므로 다른 코드에서 참조할 수 있으며 이 명령문을 JS로 컴파일 할 필요가 없습니다.라고 알리는데 사용됩니다.(__!!!__)

// 위에서 Backpack의 변수 부분으로 선언해서, object는 string입니다.
const object = backpack.get();

// backpack 변수가 string이므로, add 함수에 number를 전달할 수 없습니다.
backpack.add(23);
```

<br />

### 구조적 타입 시스템(Structural Type System)

TS의 핵심 원칙 중 하나는 타입 검사가 값이 있는 **형태** 에 집중한다는 것입니다. 이는 때때로 "덕 타이핑(duck typing)" 또는 "구조적 타이핑" 이라고 불립니다.

구조적 타입 시스템에서 두 객체가 같은 형태를 가지면 같은 것으로 간주됩니다.

```ts
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// "12, 26"를 출력합니다.
const point = { x: 12, y: 26 };
printPoint(point);
```

`point`변수는 `Point` 타입으로 선언된 적이 없지만, TS는 타입검사에서 `point`의 형태와 `Point`의 형태를 비교합니다. 둘 다 같은 형태이기 때문에, 통과합니다.

형태 일치에서는 일치시킬 객체의 필드의 하위 집합만 필요합니다.

```ts
// @errors: 2345
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// ---cut---
const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3); //prints "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); //prints "33, 3"

const color = { hex: '#187ABF' };

printPoint(color);
```

마지막으로, 정확하게 마무리 짓기 위해, 구조적으로 클래스와 객체가 형태를 따르는 방법에는 차이가 없습니다.

```ts
// @errors: 2345
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

//---cut---
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint); // prints "13, 56"
```

객체 또는 클래스에 필요한 모든 속성이 존재한다면, TS는 구현 세부 정보에 관계없이 일치하게 봅니다.

<br />
<br />
<br />

## 5분안에 보는 TypeScript

> TS로 간단한 웹 애플리케이션을 만들어 봅니다.

### TypeScript 설치하기 (Installing TypeScript)

TS설치하는 방법에는 크게 두 가지가 있습니다.

(1) npm을 이용한 설치(Node.js 패키지 매니저)
(2) TS의 Visual Studio 플러그인 설치

Visual Studio 2017과 Visual Studio2015 Update 3는 기본적으로 TS를 포함하고 있습니다.

NPM 사용자의 경우:

```
$ npm install -g typescript
```

<br />

### 천 번째 TypeScript 파일 만들기(Building your first TypeScript file)

에디터에서, `greeter.ts` 파일에 다음의 JS 코드를 입력하세요.

```js
function greeter(person) {
    return 'Hello, ' + person;
}

let user = 'Jane User';

document.body.textContent = greeter(user);
```

<br />

## 코드 컴파일하기(Compiling your Code)

`.ts` 확장자를 사용했지만, 이 코드는 아직 일반 JS 코드입니다. 기존의 JS 앱에서 이 코드를 바로 복사하여 붙여 넣을 수 있습니다.

커맨드 라인에서 TS 컴파일러를 실행하세요.

```
$ tsc greeter.ts
```

결과는 동일한 JS 코드를 포함하고 있는 `greeter.js` 파일이 나옵니다. JS 앱에서 TS를 사용하여 시작했습니다.

이제 TS가 제공하는 몇 가지 새로운 기능을 이용할 수 있습니다. 다음과 같이 ` : string` 타입 표기를 'person' 함수의 인수에 추가하세요.

```ts
function greeter(person: string) {
    return 'Hello, ' + person;
}

let user = 'Jane User';

document.body.textContent = greeter(user);
```

<br />

### 타입 표기(Type annotations)

TS의 타입 표기는 함수나 변수의 의도된 계약을 기록하는 간단한 방법입니다. 아래의 경우, greeter 함수를 단일 문자열 매개변수와 함께 호출하려고 합니다. 우리는 greeter 함수 호출 시 매개변수로 배열을 전달하도록 변경해 볼 수 있습니다.

```ts
function greeter(person: string) {
    return 'Hello, ' + person;
}

let user = [0, 1, 2];

document.body.textContent = greeter(user);
```

다시 컴파일하면, 오류가 발생한 것을 볼 수 있습니다:

```
 error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

마찬가지로, greeter 함수 호출에서 모든 인수를 제거해보세요. TS는 당신이 예상치 못한 개수의 매개변수로 이 함수를 호출했다는 것을 알려줄 것입니다. 두 경우 모두, TS는 코드의 구조와 타입 표기에 기반하여 정적 분석을 제공합니다.

오류가 존재하기는 하지만, `greeter.js`파일은 생성되었습니다. 코드에 오류가 존재하더라도 TS를 사용할 수 있습니다. 그러나 TS는 코드가 예상대로 작동하지 않을 것이라는 경고를 하게 됩니다.

<br />

### 인터페이스(Interfaces)

예제를 더 발전시켜 보겠습니다. 여기서는 firstName 및 lastName 필드를 갖고 있는 객체를 나타내는 인터페이스를 사용합니다. TS에서, 내부 구조가 호환되는 두 타입은 서로 호환됩니다. 그래서 명시적인 `implements` 절 없이, 인터페이스가 요구하는 형태를 사용하는 것만으로도 인터페이스를 구현할 수 있습니다.

```ts
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Jane', lastName: 'User' };

document.body.textContent = greeter(user);
```

<br />

### 클래스(Classes)

마지막으로, 클래스를 사용하여 예제를 확장해보겠습니다. TS는 클래스 기반 객체 지향 프로그래밍 지원과 같은 JS의 새로운 기능을 지원합니다.

생성자와 public 필드를 사용해 `Student` 클래스를 만들겠습니다. 클래스와 인터페이스가 잘 작동하여, 프로그래머가 올바른 추상화 수준을 결정할 수 있게 해준다는 점을 주목하세요.

또한, 생성자의 인수에 `public`을 사용하는 것은 그 인수의 이름으로 프로퍼티를 자동으로 생성하는 축약형입니다.

```ts
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M.', 'User');

document.body.textContent = greeter(user);
```

`tsc greeter.ts`를 재실행하면 생성된 JS 코드가 이전의 코드와 동일하다는 것을 알 수 있습니다. TS의 클래스는 단지 JS에서 자주 사용되는 프로토타입-기반 OO의 축약형일 뿐입니다.

<br />

### TypeScript 웹 앱 실행하기(Running your TypeScript web app)

이제 아래 코드를 `greeter.html`에 작성하세요.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>TypeScript Greeter</title>
    </head>
    <body>
        <script src="greeter.js"></script>
    </body>
</html>
```

브라우저에서 `greeter.html`을 열어 간단한 첫 번째 TypeScript 웹 앱을 실행해보세요!
