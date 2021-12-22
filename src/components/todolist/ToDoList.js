import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, setTodos, inputText }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDo 
          text={todo.text} 
          id={todo.id} 
          inputText={inputText} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;