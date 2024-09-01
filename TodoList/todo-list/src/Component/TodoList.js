import TodoListItem from "./TodoListItem";

// `{ todos, onRemove, onToggle }`라는 props를 받는다
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ul className="list-group mt-2">
            {todos.map(todo => ( // todos 배열을 map 이라는 메서드를 사용하여 반복한다
                <TodoListItem
                        todo={todo}
                        key={todo.id}
                        onRemove={onRemove}
                        onToggle={onToggle} />
            ))}
        </ul>
    );
};

export default TodoList;
