import React from "react";
import books from './books'

import '../addBook.css'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(books);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, title } = person;
        return (
          <div key={id} className="item">
            <h4>{title}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
