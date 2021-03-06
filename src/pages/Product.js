import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import books from "../components/books";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { Button } from '../components/Button'

import ProductosRelacionados from "../components/ProductosRelacionados";
//CSS
import "../index.css";
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
  const { title, author, id  } = props; // object destructuring the properties
  const [count, setCount] = useState(0);

  function decrementCount () {
    setCount((prevCount) => prevCount - 1);
  }

    function increaseCount() {
      setCount((prevCount) => prevCount + 1);
    }

      const url = `/cart/${id}`;


  return (
    <div className="product-card">
      <div className="book-wrapper">
        <h2 className="book-title">{title}</h2>
        <h4>Autor: {author}</h4>
        <div className="btnComprarWrapper">
          <Button className="btnComprar" onClick={decrementCount}>
            -
          </Button>
          <button className="btnComprar">{count}</button>
          <Button className="btnComprar" onClick={increaseCount}>
            +
          </Button>
        </div>        
        <NavLink to={url}>
          <Button className="btnComprar" >Agregar al carrito ahora</Button>
        </NavLink>
      </div>
    </div>
  );
};

function Product() {
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
      <div className="container breadcrumbs">
        <h3>
          Estas comprando / {requestedBook.category}   /  {requestedBook.title}
        </h3>
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

export default Product;
