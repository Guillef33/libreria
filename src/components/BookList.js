import React from "react";
import ReactDom from "react-dom";
import books from "./books";
import { Button } from "./Button";

//CSS
import "../index.css";

// Constants

const Book = (props) => {
  const { img, title, author, id, category } = props; // objet destructuring the properties

  const url = `/comprar/${id}`;

  return (
    <article className="book">
      <div className="imageContainer">
        <img src={img} alt="cover" />
      </div>
      <h1 className="book-title">{title}</h1>
      <h4>{author}</h4>
      <p className="Categoria">
        Genero: {category}
      </p>
      <a href={url}>
        <Button className="btn-comprar">Comprar</Button>
      </a>
    </article>
  );
};

function BookList() {
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
          />
        ))}
      </section>
    </>
  );
}

export default BookList;
