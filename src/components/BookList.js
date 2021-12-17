import React, { useState }  from "react";
import books from "./books";
import Book from './Book'


//CSS
import "../index.css";

function BookList() {

  // {books.filter((book) => book.category === "Food")
  //       .map((filteredBook) => (

  //       )
  //   }
  // }



  return (
    <>
      <section className="bookList">
        {books.map((book) => (
          <Book
            img={book.img}
            title={book.title}
            author={book.author}
            id={book.id}
            category={book.category}
            // Agregue esto porque salia un error de agregar una key a la bookList
            key={book.id}
          />
        ))}


      </section>
    </>
  );
}

export default BookList;
