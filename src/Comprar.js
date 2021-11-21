import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import books from "./books";

import ProductosRelacionados from "./ProductosRelacionados";
//CSS
import "./index.css";
// Constants
const BookImage = (props) => {
  const { img } = props; // objet destructuring the properties
  return (
    <article className="book">
      <img src={img} alt="cover" />
    </article>
  );
};

const BookDescription = (props) => {
  const { title, author } = props; // object destructuring the properties
  const [count, setCount] = useState(0);

  function decrementCount () {
    setCount((prevCount) => prevCount - 1);
  }

    function increaseCount() {
      setCount((prevCount) => prevCount + 1);
    }


  return (
    <div className="product-card">
      <div className="book-wrapper">
        <h2>{title}</h2>
        <h4>Autor: {author}</h4>
        <div className="btnComprarWrapper">
          <button className="btnComprar" onClick={decrementCount}>
            -
          </button>
          <button className="btnComprar">{count}</button>
          <button className="btnComprar" onClick={increaseCount}>
            +
          </button>
        </div>
        <button className="btnComprar ">Agregar al carrito</button>
      </div>
    </div>
  );
};

function Comprar() {
  let { idUrl } = useParams();

  console.log(books);
  let requestedBook;

  books.forEach((book) => {
    if (book.id == idUrl) {
      requestedBook = book;
    }
  });

  return (
    <>
      <div className="title">
        <h3>Estas comprando {requestedBook.title}</h3>
      </div>
      <div className="product-wrapper">
        <>
          <BookImage img={requestedBook.img}></BookImage>
        </>
        <>
          <BookDescription
            id={requestedBook.id}
            title={requestedBook.title}
            author={requestedBook.author}
          ></BookDescription>
        </>
      </div>
      <ProductosRelacionados />
    </>
  );
}

export default Comprar;
