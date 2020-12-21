# 함수 (Function)

> TS에서는 표준 JS 함수가 작업을 수월하게 하도록 몇 가지 새로운 기능을 추가합니다.

TS 함수는 JS와 마찬가지로 기명 함수(named function)과 익명 함수(anonymous function)로 만들 수 있습니다. 이를 통해 API에서 함수 목록을 작성하든 일회성 함수를 써서 다른 함수로 전달하든 애플리케이션에 가장 적합한 방법을 선택할 수 있습니다.

JS에서의 이 두 가지 방법에 대한 예시를 살펴봅시다.

```js
// 기명 함수
function add(x, y) {
    return x + y;
}

// 익명 함수
let myAdd = function (x, y) {
    return x + y;
};
```

JS에서처럼, 함수는 함수 외부의 변수를 참조할 수 있습니다. 이런 경우를 변수를 캡처(capture)한다고 합니다.

```js
let z = 100;

function addToZ(x, y) {
    return x + y + z;
}
```

<br />

## 함수 타입(Function Types)

### 함수 타이핑(Typing the function)

이전 예시에 타입을 더해보겠습니다.

```ts
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
};
```

각 파라미터와 함수 자신의 반환될 타입을 정해줄 수 있습니다. TS는 반환문을 보고 반환 타입을 파악할 수 있으므로 반환 타입을 생략할 수 있습니다.

### 함수 타입 작성하기(Writing the function type)

함수에 타입을 붙였으니, 이제 타입들을 살펴보고 함수의 전체 타입을 작성해 봅시다.

```ts
let myAdd: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};
```

함수의 타입은 매개변수의 타입과 반환 타입이 있습니다. 전체 함수 타입을 작성하고자 한다면 이 두가지 타입이 필요합니다. 매개변수 목록처럼 각 매개변수에 이름과 타입을 작성해 줍니다. 작성하는 이름은 가독성을 위한 것입니다. 위의 코드는 아래와 같이도 쓰일 수 있습니다.

```ts
let myAdd: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};
```

매개변수의 타입들이 올바르게 나열되어 있다면 함수 타입에 이름을 붙이더라도 유효한 타입으로 간주합니다.

두 번째로 반환 타입입니다. 매개변수 타입들과 반환 타입 사이에 '화살표 표기'(`=>`)를 써서 반환 타입을 분명히 할 수 있습니다. 이전에 언급했듯이, 함수 표기에 필요한 부분입니다. 그래서 만약 함수가 값을 반환하지 않는다면 비워두는 대신 **`void`** 를 써서 표시합니다.

참고로, **매개변수 타입과 반환 타입만이 함수 타입을 구성합니다.** 캡처된 변수는 타입에 반영되지 않습니다. 사실상 캡처된 변수는 함수의 "숨겨진 상태"의 일부이고 API를 구성하지 않습니다.

### 타입의 추론(Inferring the types)

TS 컴파일러가 방정식의 한쪽에만 타입이 있더라도 타입을 알아낼 수 있습니다.

```ts
// myAdd는 전체 함수 타입을 가집니다.
let myAdd = function (x: number, y: number): number {
    return x + y;
};

// 매개변수 x와 y는 number 타입을 가집니다.
let myAdd: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
};
```

이러한 타입 추론 형태를 `"contextual typing"` 이라 부릅니다. 이를 통해 여러분의 프로그램에서 타입을 유지하기 위한 노력을 줄일 수 있습니다.

<br />

### 선택적 매개변수와 기본 매개변수(Optional and Default Parameter)

TS에서는 모든 매개변수가 함수에 필요하다고 가정합니다. 이것이 `null`이나 `undefined`를 줄 수 없다는 걸 의미하는 것은 아닙니다. 대신 함수가 호출될 때, 컴파일러는 각 매개변수에 대해 사용자가 값을 제공했는지를 검사합니다. 또한, 컴파일러는 매개변수들이 함수로 전달될 유일한 매개변수라고 가정합니다. 요약하자면, **함수에 주어진 인자의 수는 함수가 기대하는 매개변수의 수와 일치해야 합니다.**

```ts
function buildName(firstName: string, lastName: string) {
    return firstName + ' ' + lastName;
}

let result1 = buildName('Bob'); // Error, 너무 적은 매개변수
let result2 = buildName('Bob', 'Adams', 'Sr.'); // Error, 너무 많은 매개변수
let result3 = buildName('Bob', 'Adams'); // 정확함
```

JS에서는 모든 매개변수가 선택적이고, 사용자는 적합하다고 생각하면 그대로 둘 수 있습니다. 그렇게 둔다면 그 값은 `undefined`가 됩니다. **TS에서도 선택적 매개변수를 원한다면 매개변수 이름 끝에 `?`를 붙임으로써 해결할 수 있습니다.**

```ts
function buildName(firstName: string, lastName?: string) {
    return firstName + ' ' + lastName;
}

let result1 = buildName('Bob'); // 바르게 동작
let result2 = buildName('Bob', 'Adams', 'Sr.'); // Error, 너무 많은 매개변수
let result3 = buildName('Bob', 'Adams'); // 정확함
```

어느 선택적 매개변수든 반드시 매개변수 정의가 필요합니다. lastName 대신 firstName을 선택적으로 하고 싶다면 매개변수의 순서를 변경해야 합니다.

TS에서는 유저가 값을 제공하지 않거나 `undefined`로 했을 때에 할당될 매개변수의 값을 정해 놓을 수도 있습니다. 이것을 `기본-초기화 매개변수`라고 합니다. 이전 예시에서 lastName을 `"Smith"`라고 지정해보겠습니다.

```ts
function buildName(firstName: string, lastName = 'Smith') {
    return firstName + ' ' + lastName;
}

let result1 = buildName('Bob'); // 올바르게 동작, "Bob Smith" 반환
let result2 = buildName('Bob', undefined); // 여전히 동작, 역시 "Bob Smith" 반환
let result3 = buildName('Bob', 'Adams', 'Sr.'); // 오류, 너무 많은 매개변수
let result4 = buildName('Bob', 'Adams'); // 정확함
```

모든 필수 매개변수 뒤에 오는 `기본-초기화 매개변수`는 선택적으로 처리되며, 선택적 매개변수와 마찬가지로 해당 함수를 호출할 때 생략할 수 있습니다. 이는 선택적 매개변수와 뒤따르는 기본 매개변수의 타입들이 공통성을 공유함을 의미합니다. 그래서 이 두가지

```ts
function buildName(firstName: string, lastName?: string) {
    // ...
}
```

와

```ts
function buildName(firstName: string, lastName = 'Smith') {
    // ...
}
```

는 `(firstName: string, lastName?: string) => string`라는 공통된 타입을 공유합니다. `lastName`의 기본값은 타입에서 사라지고 오직 선택적 매개변수라는 사실만 남깁니다.

순수한 선택적 매개변수와는 다르게 `기본-초기화 매개변수`는 필수 매개변수 뒤에 오는 것이 강요되지 않습니다. 만약 `기본-초기화 매개변수`가 필수 매개변수보다 앞에 오게 된다면 사용자가 명시적으로 `undefined`를 전달해 주어야 `기본-초기화 매개변수`를 볼 수 있습니다. 앞서 사용했던 예시에 기본 초기화를 `firstName`에 적용한 것입니다.

```ts
function buildName(firstName = 'Will', lastName: string) {
    return firstName + ' ' + lastName;
}

let result1 = buildName('Bob'); // 오류, 너무 적은 매개변수
let result2 = buildName('Bob', 'Adams', 'Sr.'); // 오류, 너무 많은 매개변수
let result3 = buildName('Bob', 'Adams'); // 성공, "Bob Adams" 반환
let result4 = buildName(undefined, 'Adams'); // 성공, "Will Adams" 반환
```

### 나머지 매개변수(Rest Parameters)
