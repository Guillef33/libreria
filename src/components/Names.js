import React from "react";
import books from "./components/books";

//CSS
import "./index.css";

const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

function Names() {
  return (
    <div>
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
  );
}

export default Names;