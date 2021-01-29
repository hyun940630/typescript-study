리터럴 타입은 단순한 집합 타입보다 구체적인 하위 타입입니다. 이것이 의미하는 것은 타입 시스템 내에서 "Hello world"는 `string`이지만, `string`은 "Hello world"가 아니라는 것입니다.(?)

오늘날 TS에는 문자열과 숫자, 두 가지 리터럴 타입이 있는데 이를 사용하면 문자열이나 숫자에 정확한 값을 지정할 수 있습니다.

<br/>
<br/>
<br/>

## 리터럴 타입 좁히기(Literal Narrowing)
`var` 또는 `let`으로 변수를 선하는 것은 **이 변수는 변경될 수 있음**을 컴파일러에게 알려주는 것입니다. 반면, `const`를 통한 변수 선언은 TS에게 이 변수는 **절대** 변하지 않는 다는 것을 알려주는 것입니다.

```ts
const helloWorld = "Hello World";

let hiWord = "Hi World";
```

무한한 수의 잠재적 케이스들(문자열 값은 경우의 수가 무한대)을 유한한 수의 잠재적 케이스(`helloWorld`의 경우 1개)로 줄여나가는 것을 타입 좁히기(narrowing)라 합니다.

> 즉, `const`를 통한 선언된 변수는 선언 당시의 타입 하나만을 가진다. 👏🏻

<br />
<br />
<br />

## 문자열 리터럴 타입(String Literal Types)

실제로 문자열 리터럴 타입은 `유니언 타입`, `타입 가드` 그리고 `타입 별칭`과 잘 결합됩니다. 이런 기능을 함께 사용하여 문자열로 `enum`과 비슷한 형태를 갖출 수 있습니다.

```ts
// @errors: 2345
type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
        // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
        // ...
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy");
```

허용된 세 개의 문자열이 아닌 다른 문자열을 사용하게 되면 오류가 발생합니다.

```
'`uneasy`' 타입은 '"ease-in" | "ease-out" | "ease-in-out"' 타입의 매개 변수에 할당할 수 없습니다.
```

문자열 리터럴 타입은 오버로드를 구별하는 것과 동일한 방법으로 사용될 수 있습니다.

```ts
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... 추가적인 중복 정의들 ...
function createElement(tagName: string): Element {
  // ... 여기에 로직 추가 ...
}
```

<br />
<br />
<br />

## 숫자형 리터럴 타입(Numberic Literal Types)

TS에는 위의 문자열 리터럴과 같은 역할을 하는 숫자형 리터럴 타입도 있습니다.

```ts
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();
```

이것은 주로 설정값을 정의하기 위해 사용됩니다!

```ts
/** loc/lat 좌표에 지도를 생성합니다. */
declare function setupMap(config: MapConfig): void;

// ...

interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
```