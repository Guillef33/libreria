import React from 'react'

const Book = (props) => {
  const { img, title, author } = props; // objet destructuring the properties
  // Atribute, eventHandler
  // onClick, onMouseOver
  //  reference example
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="cover" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {props.children}
      <button type="button" onClick={clickHandler}>
        Learn More
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default Book
