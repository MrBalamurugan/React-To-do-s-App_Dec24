import React from 'react'
import TodoItems from './TodoItems';
import '../Styles/TodoList.css';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div className="todo-list">
          {todos.map(todo => (
            <TodoItems
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>
      );
    };

export default TodoList