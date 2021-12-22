import React from "react";

function FormToDoList({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    // Get the value of the input
    console.log(e.target.value);
    // Update the value in the set
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    // update state by creating a object that store the toDos
    setTodos([
      ...todos, 
      { 
        text: inputText, 
        complete: false, 
        id: Math.random() * 1000 
      }
    ]);
    // set the state back to zero
    setInputText ('');
  };

  return (
    <>
      <form>
        <input 
        value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
        />
        <button
          onClick={submitToDoHandler}
          className="todo-button"
          type="submit"
        >
          <i class="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default FormToDoList;
