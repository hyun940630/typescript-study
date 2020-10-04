# TypeScript + React + Redux 사용하기

<br />

> [TypeScript환경에서 Redux를 프로처럼 사용하기](https://velog.io/@velopert/use-typescript-and-redux-like-a-pro)를 기반으로 스터디합니다.

<br />
<br />

이 듀토리얼에서는 정말 간단한 리덕스 예시인 카운터와 투두리스트를 만들어 봅니다.

<br />
<br />

## 프로젝트 세팅, 라이브러리 설치하기

```
$ npx create-react-app ts-react-redux-tutorial --typescript
$ cd ts-react-redux-tutorial
$ yarn add redux react-redux @types/react-redux
```

<br />

redux의 경우 자체적으로 TS를 지원하지만 react-redux의 경우 그렇지 않기 때문에 패키지명 앞에 `@types`를 붙인 패키지를 설치해주어야 합니다.
<br />
`@types`는 TS 미지원 라이브러리에 TS 지원을 받을 수 있게 해주는 써드파티 라이브러리입니다. 이와 관련된 소스코드는 [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)라는 GitHub 레포에서 관리되고 있습니다.
<br />
라이브러리에서 공식 TS 지원이 되는지 안되는지 확인하려면 직접 설치 후 불러와서 확인할 수도 있고, GitHub 레포를 열어서 `index.d.ts`라는 파일이 존재하는지 확인해 볼 수 있습니다.

<br />
<br />
<br />

## 카운터 리덕스 모듈 작성하기

간단한 카운터를 작성합니다. 리덕스 코드를 작성 할 때 Ducks 패턴을 사용해 보겠습니다. Ducks 패턴에서는 편의성을 위하여 액션의 `type`, 액션 생성함수, 리듀서를 모두 한 파일에 작성합니다.

<br />

> src/modules/counter.ts

<br />

1. 액션 type 선언

<br />

여기서 `type`은 TypeScript의 type을 의미하는게 아니라 리덕스 액션 안에 들어가게 될 type값입니다.

<br />

type을 선언할 때에는 다음과 같이 문자열 뒤에 `as const`라는 키워드를 붙여줘야 합니다.

<br />

```
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
```

<br />

`as const`는 const assertions라는 TypeScript 문법입니다. 이 문법을 사용하면 우리가 추후 액션 생성함수를 통해 액션 객체를 만들게 되었을 때 type의 TypeScript 타입이 `string`이 되지 않고 실제값을 가르키게 됩니다.

<br />
<br />

2. 액션 생성 함수 선언

<br />

액션 생성 함수를 작성 할 때에는 `function` 키워드를 사용해도 되고, 화살표 함수 문법을 사용해도 됩니다. 화살표 함수 문법을 사용하면 `return`을 생략 할 수 있어서 깔끔하기 때문에 우리는 화살표 함수를 사용하여 선언해보도록 하겠습니다. 아까 작성한 코드 하단에 아래 코드를 작성합니다.

<br />

```
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff,
});
```

<br />

여기서 `increase`와 `decrease`의 경우엔 함수에서 따로 파라미터를 받아오지 않습니다. `increaseBy`의 경우엔 `diff`라는 값을 파라미터로 받아와서 액션의 `payload`값으로 설정해줍니다. 이 과정에서 값의 이름을 `payload`로 바꿔주었는데 이는 [FSA 규칙](https://github.com/redux-utilities/flux-standard-action)을 따르기 위함입니다. 이 규칙을 따름으로써 액션 객체의 구조를 일관성있게 가져갈 수 있어서 추후 리듀서에서 액션을 다룰 때에도 편하고, 읽기 쉽고, 액션에 관련된 라이브러리를 사용할 수도 있게 해줍니다. 다만, 꼭 따라야 할 필요는 없으니 만약 FSA가 불편하면 굳이 이렇게 `payload`라는 이름으로 넣을 필요는 없습니다. 추가적으로 액션 생성 함수들은 추후 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 `export`해줍니다.

<br />
<br />

3. 액션 객체들에 대한 type 준비하기

<br />

여기서의 "type"은 TypeScript의 타입을 의미합니다. 나중에 우리가 리듀서를 작성할 때 action 파라미터의 타입을 설정하기 위해서 우리가 만든 모든 액션들의 TypeScript 타입을 준비해줘야 합니다. 이는 다음과 같이 선언할 수 있습니다.

<br />

```
type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;
```

<br />

여기서 사용된 `ReturnType`은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입입니다.

<br />

이전에 액션의 `type`값들을 선언 할 때 `as const`라는 키워드를 사용했습니다. 만약 이 작업을 처리하지 않으면 `ReturnType`을 사용하게 됐을 때 `type`의 타입이 무조건 `string`으로 처리되어버립니다. 그렇게 되면 나중에 리듀서를 제대로 구현 할 수 없습니다.

<br />
<br />

4. 상태의 타입과 상태의 초깃값 선언하기

<br />

counter 모듈에서 관리할 상태의 타입과 상태의 초깃값을 선언하겠습니다.

<br />

```
type CounterState = {
    count: number;
}

const initialState: CounterState = {
    count: 0
}
```

<br />

간단합니다! 리덕스 상태의 타입을 선언 할 때에는 `type`을 써도되고 `interface`를 써도 됩니다. 프로젝트 내에서 둘 중 하나만을 선택해서 사용하는 것을 권장합니다.

<br />
<br />

5. 리듀서 작성하기

<br />

마지막으로, 리듀서를 작성하고 내보내주겠습니다. 리듀서를 작성하는 것은, 우리가 이전에 `useReducer`의 사용법을 배웠을 때랑 똑같습니다. 함수의 반환 타입에 상태의 타입을 넣는 것을 잊지 마세요. 이를 통해 사소한 실수를 방지 할 수 있습니다.

```
function counter(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counter;
```

<br />

리듀서를 작성하는 과정에서 `case` 부분에서 액션의 `type` 값에 유효하지 않은 값을 넣게 된다면 오류가 나타나게 됩니다.

<br />
<br />
<br />

## 프로젝트에 리덕스 적용하기

<br />

먼저 루트 리듀서를 만들어줍니다. modules 디렉터리에 index.ts 파일을 만들어서 다음과 같이 코드를 작성해줍니다.

<br />

> src/modules/index.ts

```
import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
```

<br />

루트 리듀서를 만들 때에는 일반 JavaScript 환경과 동일하게 작성됩니다. 주의해야할 부분은 `RootState`라는 타입을 만들어서 내보내줘야합니다. 이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해서 `useSelector`를 사용 할 때 필요로 합니다.

<br />

이제 루트 리듀서를 만들었으니 index.tsx 파일에서 스토어를 생성하고 Provider 컴포넌트를 사용하여 리액트 프로젝트에 리덕스를 적용해보겠습니다.

<br />

> index.tsx

```
import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

<br />
<br />
<br />

## 카운터 Presentational 컴포넌트 만들기

<br />

이제 프리젠테이셔널 컴포넌트를 만들어보겠습니다. 우리가 이번에는 프리젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 구분해서 만들어보도록 하겠습니다. 하지만, 참고로 `Dan Abramov`님이 자신이 쓴 [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) 포스트를 수정하면서 덧붙였듯이, Presentational/Container 구조는 필수적이지 아닙니다. 따라서 사용은 자유롭습니다.

<br />

먼저, 이 구조로 컴포넌트들을 작성해보고, 그 다음에는 컨테이너를 따로 구분하지 않는다면 어떻게 구현하는게 좋을지도 알아보겠습니다.

<br />

src 디렉터리에 components 디렉터리를 만들고 그 안에 `Counter.tsx`를 다음과 같이 작성합니다.

<br />

> src/components/Counter.tsx

```
import React from 'react';

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};

function Counter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
}: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
}

export default Counter;
```

<br />

컴포넌트에서 필요한 값과 함수들은 모두 props로 받아오도록 처리했습니다. 위 컴포넌트에서는 3개의 버튼을 보여주는데 3번째 버튼의 경우 클릭이 되면 5를 `onIncreaseBy`함수의 파라미터로 설정하여 호출합니다.

<br />
<br />
<br />

## 카운터 Container 컴포넌트 만들기

<br />

그 다음에는 리덕스 스토어 안에 있는 상태를 조회하여 사용하고, 액션도 디스패치하는 컨테이너 컴포넌트를 만들어봅시다.
src 디렉터리에 containers 디렉터리를 만들고, 그 안에 CounterContainer.tsx 파일을 생성하여 다음 코드를 작성합니다.

<br />

> src/containers/CounterContainer.tsx

```
import { decrease, increase, increaseBy } from '../modules/counter';
import { useDispatch, useSelector } from 'react-redux';

import Counter from '../components/Counter';
import React from 'react';
import { RootState } from '../modules';

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onIncreaseBy = (diff: number) => dispatch(increaseBy(diff));

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
}

export default CounterContainer;
```

<br />

TypeScript로 Container 컴포넌트를 작성 할 때 특별한 점은 `useSelector` 부분에서 `state`의 타입을 `RootState`로 지정해서 사용한다는 것 외에는 없습니다.

<br />

이제, 이 CounterContainer 컴포넌트를 App 컴포넌트에서 렌더링해보세요.

<br />

> src/App.tsx
```
import CounterContainer from './containers/CounterContainer';
import React from 'react';

function App() {
    return <CounterContainer />;
}

export default App;
```

<br />
<br />
<br />

## Presentational / Container 분리를 하지 않는다면?