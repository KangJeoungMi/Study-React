import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';
import TodoTemplate from './Component/TodoTemplate';

const App = () => {
  // useState를 사용하여 todos의 기본값을 정했고 이후 setTodos를 이용하여 todos의 배열에 항목을 추가, 수정 삭제 할 예정이다
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'todo-list #1',
      checked: true
    },
    {
      id: 2,
      text: 'todo-list #2',
      checked: true
    },
    {
      id: 3,
      text: 'todo-list #3',
      checked: false
    }
  ]);

  // === 배열에 새 객체 추가하기 ===
  // useRef의 current속성은 인자로 넘어온 초기값을 current에 할당한다.
  // useRef는 current값이 바뀌어도 컴포넌트가 리렌더링 되지 않고, 컴포넌트가 리렌더링 되어도 current 값을 잃지 않은 장점이 있다.
  const nextId = useRef(4); // useRef로 id를 할당해준다. todos의 기본값으로 id가 3까지 있으니 초기값을 4로 지정해준다.

  // onInsert 함수 
  // 인자로 text(입력창의 텍스트)를 받아서 todo라는 객체를 생성한다
  // todo 객체는 todos의 객체와 같은 구조로 되어있다
  const onInsert = useCallback(
    text => {
      // todo 객체 역시  id, text, checked 유무를 지정해준다.
      const todo = {
        id: nextId.current,
        text,
        checked: false, // 아직 체크를 하지 않았으니 false로 지정한다
      };
      // setTodos으로 기존 todos에 todo객체를 넣어준다 
      setTodos(todos.concat(todo)); // concat() : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환하는 메서드이다
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  // === 일정 삭제하기 ===
  const onRemove = useCallback(
    // id를 인자로 받은 후 todos배열에서 id가 일치하지 않는 것들만 모아 새로운 배열로 반환한다. => id가 일치한 것만 제외된다
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  ); //  일정 항목을 클릭하였을 때 onRemove함수 작동하게 하기 ==> TodoListItem.js

  // === 일정 체크하기 ==
  // TodoList.js 에서 삼항연상자를 이용하여 체크박스 체크 유무를 지정한다
  // [문제] 각 일정항목을 클릭하였을 때 해당 todo객체 안에 있는 checked의 값을 바꿔하 한다
  // id를 인자로 받아서 해당 id의 todo객체의 checked의 값을 바꿔준다 (삭제 기능과 유사)
  const onToggle =useCallback(
    id => {
      setTodos(
        // map() 메서드를 이용하여 todo의 id가 인자로 받은 id와 해당할 경우
        // 기존 todo객체를 복사해와서 기존 id와 text의 정보는 유지하고 ckecked의 상태만 반대로 바꿔준다. id가 일지 하지 않은 경우 냅둔다
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },[todos],
  );
  // onToggle 함수를 props로 ToDoListItem.js까지 전달하고 해당 div에 onClick 이벤트로 걸어준다



  return (
    <TodoTemplate>
      {/* onInsert prop을 onInsert={}함수에 전달한다 */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}


export default App;
