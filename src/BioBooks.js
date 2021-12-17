import React from "react";
import books from "./components/books";
import Book from './components/Book'

import { Button } from "./components/Button";

// PROBAR ESTO
// const url = `/food/${filteredBook.id}`;

function FoodBooks() {

  return (
    <div className="bookList">
      
      {books
        .filter((book) => book.category === "Biography")
        .map((filteredBook) => (
          <Book
            img={filteredBook.img}
            title={filteredBook.title}
            author={filteredBook.author}
            id={filteredBook.id}
            category={filteredBook.category}
            // Agregue esto porque salia un error de agregar una key a la bookList
            key={filteredBook.id}
          />
        ))}
    </div>
  );
}


function FoodList() {
  return (
    <>
      <section className="bookList">
        {books.map((book) => (
          <FoodBooks
            img={book.img}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </section>
    </>
  );
}

export default FoodBooks;

    