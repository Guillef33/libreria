import React from "react";
import Book from "./Book";
import books from "./books";

import { Button } from "./Button";

// const books = [
//   {
//     id: "ab123",
//     img: "https://images-na.ssl-images-amazon.com/images/I/41kuAx41bCL._SX329_BO1,204,203,200_.jpg",
//     title: "The Storyteller: Tales of Life and Music",
//     author: "David Grohl",
//     category: "Music",
//   },

//   {
//     id: "ab124",
//     img: "https://images-na.ssl-images-amazon.com/images/I/41QhuwRJ43S._SX329_BO1,204,203,200_.jpg",
//     title: "Taste: My Life Through Food",
//     author: "Stanley Tucci",
//     category: "Biography",
//   },

//   {
//     id: "ab125",
//     img: "https://images-na.ssl-images-amazon.com/images/I/41GlPC9yjzS._SX329_BO1,204,203,200_.jpg",
//     title: "Bourdain: The Definitive Oral Biography",
//     author: "Laurie Woolever",
//     category: "Food",
//   },

//   {
//     id: "ab125",
//     img: "https://images-na.ssl-images-amazon.com/images/I/41GlPC9yjzS._SX329_BO1,204,203,200_.jpg",
//     title: "Titulo de prueba",
//     author: "Laurie Woolever",
//     category: "Food",
//   },
// ];

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
            <a href={filteredBook.url}>
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
            id={book.id}
            category={book.category}
          />
        ))}
      </section>
    </>
  );
}

export default FoodList;

    