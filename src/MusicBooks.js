import React from "react";
import Book from "./Book";
import books from "./books";

import { Button } from "./Button";

function MusicBooks() {
  return (
    <div>
      {books
        .filter((book) => book.category === "Music")
        .map((filteredBook) => (
          <article className="book">
            <div className="imageContainer">
              <img src={filteredBook.img} alt="cover" />
            </div>
            <h1 className="book-title">{filteredBook.title}</h1>
            <h4>{filteredBook.author}</h4>
            <p className="Categoria">Genero: {filteredBook.category}</p>
            <a href={filteredBook.url}>
              <Button className="btn-comprar">Comprar</Button>
            </a>
          </article>
        ))}
    </div>
  );
}


function MusicList() {
  return (
    <>
      <section className="bookList">
        {books.map((book) => (
          <MusicBooks
            img={book.img}
            title={book.title}
            author={book.author}
            id={book.id}
            category={book.category}
          />
        ))}
      </section>
    </>
  );
}

export default MusicList;

    