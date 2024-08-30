### React Hooks 학습

## 목차
1. 개요
2. 규칙
3. 주요 Hook(`useState`, `useEffect`, `useContext`, `useReducer`, `useRef`, `useMemo`, `useCallback`)
4. 용어설명 (메모제이션, 컴포넌트)
---
## 1. 개요
> - 함수형 컴포넌트 상태(state)와 생명주기(lifecycle)관련 기능을 사용할 수 있도록 해주는 기능이다.(생명주기 기능을 `연동`할수 있게 해주는 함수)
> - Hook은 `class`안에서는 동작하지 않으며, 대신 `class` 없이 리액트를 사용할 수 있게 해준다
---
## 2. 규칙
1. Hook은 최상위에서만 호출해야 한다. 조건문이나 반복문 안에서 훅을 호출하면 안된다.
2. Hook은 리액트 함수 컴포넌트나 커스텀 Hook내에서만 호출해야 한다. 일반 자바스트립트 함수에서는 훅을 호출 할 수 없다.
---

## 3. 주요 Hook(`useState`, `useEffect`, `useContext`, `useReducer`, `useRef`, `useMemo`, `useCallback`)
### ✔️ `useState`
> 컴포넌트에서 상태를 관리할 수 있게 해준다.
```javascript
const [count, setCount] = useState(0);
```
|코드 설명|
|-------|
`count` : 상태변수
`setCount` : 상태를 업데이트 하는 함수
`초기상태`는 0으로 설정된다
---
### ✔️ `useEffect`
> - 컴포넌트가 렌더링 된 후에 특정 작업을 수행할 수 있게 해준다
> -` 데이터 가져오기`, `구독 설정`, `DOM 업데이트` 등의 부수효과(side effects)를 처리하는 데 사용된다.
```javascript
useEffect(() => {
  console.log('컴포넌트가 렌더링될 때마다 실행');
}, []);
```
|코드 설명|
|-------|
컴포넌트가 마운트 된 떄 한번 실행
두번째 인자인 빈 배열 `[]`은 의존성 배열로, 이 배열에 포함된 값이 변경될 때마다 이 훅이 다시 실행된다.
---

### ✔️ `useContext`
> 컨텍스트(Context)를 ㅏ용하여 컴포넌트 트리 전체에 걸쳐 전역상태를 쉽게 공유할 수 있게 해준다
```javascript
const value = useContext(MyContext);
```
|코드 설명|
|-------|
`MyContext` 는 `React.createContext`로 생성된 컨텍스트 객체이다
---
### ✔️ `useReducer`
> 복잡한 상태 로직을 관리할 떄 유용하다, 상태와 상태를 업데이트 하는 로직을 분리할 수 있음. (리덕스(Redux)와 유사한 패턴이다)
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```
|코드 설명|
|-------|
`reducer` : 상태를 변경하는 함수
`initialState` : 초기 상태
---
### ✔️ `useRef`
> DOM요소에 직접겁근하거나, 값이 바뀌어도 렌더링에 영향을 주지 않는 변수를 관리할 때 사용된다
```javascript
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};
```
|코드 설명|
|-------|
`inputRef` : 특정 DOM요소를 가르킨다
`inputRef.current` : 이 ㅎ마수를 통해 해당 요소에 접근할 수 있다
---
### ✔️ `useMemo`
> 계산 비용이 높은 연산의 결과를 `메모제이션`하여, 의존성 배열의 값이 변경되지 않는 한 동일한 연산을 반복하지 않도록 한다
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
|코드 설명|
|-------|
`a`와 `b`가 변경되지 않는 한 `computeExpensiveValue`가 다시 실행되지 않음
---
### ✔️ `useCallback`
> 함수의 참조를 메모제이션하여, 의존성 배열의 값이 변경되지 않는 한 동일한 함수 참조를 유지한다. 자식 컴포넌트 함수를 `prop`으로 전달할 떄 성능 최적화에 유용하다
---
```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```
|코드 설명|
|-------|
`a`와 `b`가 변경되지 않는 한 `memoizedCallback` 함수의 참조가 변경되지 않음
---
## 4. 용어 설명
> **`메모제이션`** : 동일한 계산을 반복해야 할 때 `이전에 계산했던 값들을 메모리에 저장`함으로써 동일한 계산의 반복 수행을 제거하여 **프로그램 실행 속도를 빠르게 할수 있는 방법**(동적 계획법의 핵심이 되는 기술)

> - 리액트는 화면에서 UI요소를 구분할 때 `컴포넌트`라는 단위를 사용한다. 
> - 예를 들어 레고 블록으로 만든 집에서 하나의 레고블럭이 `컴포넌트` 이다.
> - 리액트에서는 `함수 컴포넌트`, `클래스 컴포넌트` 두가지가 있다.