import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import FormToDoList from "../components/todolist/FormToDoList";
import ToDoList from "../components/todolist/ToDoList";
//CSS
import "../todolist.css";

function PageToDo() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Get Local ToDos
  useEffect (() => {
    getLocalTodos();
  }, [])

  // use Effect
  useEffect(() => {
    // console.log("Any");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

      const saveLocalTodos = () => {      
          localStorage.setItem("todos", JSON.stringify(todos));
        };

      const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
          localStorage.setItem("todos", JSON.stringify([]));
        } else {
          let todoLocal = JSON.parse(localStorage.getItem('todos'))
          setTodos(todoLocal);
        }
      };


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
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </>
  );
}

export default PageToDo;
