import React from "react";
import Book from './components/Book';
import books from "./components/books";
import BookList from "./components/BookList";

function ProductosRelacionados() {
  return (
    <>
      <div className="title">
        <h1>Productos relacionados</h1>
        <BookList />
      </div>
    </>
  );
}

export default ProductosRelacionados;
