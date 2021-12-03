import React from "react";

const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

function Names() {
  return (
    <div>
      {names.map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
  );
}

export default Names;