import React, { useState } from "react";
import ReactDom from "react-dom";
import FormToDoList from "../components/todolist/FormToDoList";
import ToDoList from "../components/todolist/ToDoList";
//CSS
import "../todolist.css";

function PageToDo({ itemCount }) {
    const [inputText, setInputText] = useState ('');
    const [todos, setTodos] = useState([]);

    return (
      <>
        <header>
          <h1>Ed's Todo List</h1>
        </header>
        <FormToDoList
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <ToDoList 
        todos={todos} 
        setTodos={setTodos} />
      </>
    );
}

export default PageToDo;