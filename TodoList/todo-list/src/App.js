import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';
import TodoTemplate from './Component/TodoTemplate';

const App = () => {
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

  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  );
  const onToggle =useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },[todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}


export default App;
