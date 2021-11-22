import React from "react";
import books from "./components/books";

import { Button } from "./components/Button";

// PROBAR ESTO
// const url = `/food/${filteredBook.id}`;

function FoodBooks() {

  return (
    <div>
      {books
        .filter((book) => book.category === "Food")
        .map((filteredBook) => (
          <article className="book">
            <div className="imageContainer">
              <img src={filteredBook.img} alt="cover" />
            </div>
            <h1 className="book-title">{filteredBook.title}</h1>
            <h4>{filteredBook.author}</h4>
            <p className="Categoria">Genero: {filteredBook.category}</p>
            <a href={filteredBook.id}>
              <Button className="btn-comprar">Comprar</Button>
            </a>
          </article>
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

export default FoodList;

    