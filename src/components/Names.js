import React from "react";

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