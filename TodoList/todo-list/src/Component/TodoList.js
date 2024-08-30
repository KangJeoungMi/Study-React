import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <ul className="list-group mt-2">
            {todos.map(todo => (
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
