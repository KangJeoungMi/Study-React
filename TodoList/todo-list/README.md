## TodoList

### 목표
- 리액트와 부트스트랩을 이용하여 CRUD기능이 있는 투두리스트 앱 구현

### 사용기술
- useState, useRef, useCallback 등의 리액트 훅 사용

### 기능 설명
- 기능 설명은 코드에 주석을 달아 자세히 적어둠
![result](./img/result.gif)

> 항목 추가, 삭제
![result.mp4](./img/todo.png)

```javascript
<TodoTemplate>
    <ToDoInsert />
    <ToDoList> //할 일 목록(ul)
        <ToDoListItem /> //할 일 (li)
    </ToDoList>
	<ToDoEdit /> //수정하기 창
</TodoTemplate>
```
---

[리액트 부트스트랩 설치](https://react-bootstrap.github.io)

> $ npm install react-boostrap bootstrap
- `App.js`, `index,js`에 import `'bootstrap/dist/css/bootstrap.min.css';`라이브러리 추가하기

---

### 참고자료
1. [Hooks_useCallback](https://velog.io/@hjthgus777/React-%EB%8B%A4%EC%8B%9C-%ED%95%9C%EB%B2%88-useCallback%EC%9D%84-%ED%8C%8C%ED%97%A4%EC%B3%90%EB%B3%B4%EC%9E%90)

2. [map](https://velog.io/@wooyong99/React-map-%EC%82%AC%EC%9A%A9%EB%B2%95)

3. [구조분해 할당](https://velog.io/@soonmac/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-%ED%95%A0%EB%8B%B9)

4. [useRef](https://velog.io/@hyoribogo/react-useref)
    - useRef: useRef(초기값) 여기서는 useRef를 로컬 변수로 활용한다.
    - 로컬변수 : 렌더링과 상관없이 바뀔 수 있는 값

5. [.filter()](https://velog.io/@suhado/React-filter%ED%95%A8%EC%88%98)