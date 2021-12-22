import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, inputText, filteredTodos }) => {
  // const [todos, setTodos] = useState([]);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <ToDo
            text={todo.text}
            // inputText={inputText}
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
