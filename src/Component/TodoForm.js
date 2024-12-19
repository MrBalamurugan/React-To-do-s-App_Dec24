import React, { useState } from 'react'
import '../Styles/TodoForm.css'

const TodoForm = ({ addTodo }) => {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (input.trim()) {
        addTodo(input);
        setInput('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <button type="submit" className="todo-button">Add</button>
      </form>
    );
  };
  

export default TodoForm