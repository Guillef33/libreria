import React from "react";
import Book from "./components/Book";
import books from "./components/books";

import { Button } from "./components/Button";

function updateCarrito () {
  console.log(`Se agrego al carrito`);
}

 // Quisiera agregar el titulo ${filteredBook.title}

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
              <Button className="btn-comprar" onClick={updateCarrito}>Comprar</Button>
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
        {books.map((Musicbook) => (
          <MusicBooks
            img={Musicbook.img}
            title={Musicbook.title}
            author={Musicbook.author}
            id={Musicbook.id}
            category={Musicbook.category}
          />
        ))}
      </section>
    </>
  );
}

export default MusicList;

    