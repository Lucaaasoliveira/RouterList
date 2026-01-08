function TodoItem({ todo, onToggle}) {
    return (
        <li onClick={onToggle} style={{
            cursor: "pointer",
            textDecoration: todo.done ? "line-through" : "none"
        }}>
            {todo.text}
        </li>
    );
}

export default TodoItem