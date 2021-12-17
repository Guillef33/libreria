import React, { useState } from "react";
import ReactDom from "react-dom";
import { CarouselControl } from "reactstrap";

//stateless function component
// always return JSX
import BookList from "../components/BookList";
import Hero from "../components/Hero";
import MusicBook from "./MusicBooks";
import SearchBar from "../components/SearchBar";
import books from "../components/books";
import Book from "../components/Book";


//CSS
import "../index.css";

function Home() {

    const [state, setState] = useState({
        books: books,
    });

  return (
    <>
      <Hero />
      {/* <h2 className="titulo-home">El genero que mas te gusta</h2>
      <MusicBook /> */}
      <h2 className="titulo-home">Novedades del ultimo mes</h2>

      <div className="bookList isNovedad">
        {books
          .filter((book) => book.isNovedad === true)
          .map((filteredBook) => (
            <Book
              img={filteredBook.img}
              title={filteredBook.title}
              author={filteredBook.author}
              id={filteredBook.id}
              category={filteredBook.category}
              // Agregue esto porque salia un error de agregar una key a la bookList
              key={filteredBook.id}
              className="isNovedad"
            />
          ))}
      </div>

    </>
  );
}



export default Home;