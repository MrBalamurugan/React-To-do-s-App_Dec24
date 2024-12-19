import React from 'react'
import '../Styles/TodoItems.css'
const TodoItems = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
        </div>
      );
    };

export default TodoItems