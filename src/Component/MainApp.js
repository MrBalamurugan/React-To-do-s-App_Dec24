import React, { useState } from 'react'
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../Styles/MainApp.css';
const MainApp = () => {
    const [todos, setTodos] = useState([]);

    console.log(todos)

    const addTodo = (text) => {
      setTodos([
        ...todos,
        { id: Date.now(), text, completed: false }
      
      ]);
    };

  
    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id,
    
      ));

    };
  
    const toggleTodo = (id) => {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    };
  
    return (
      <div className="app">
        <Header />
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    );
  };

export default MainApp