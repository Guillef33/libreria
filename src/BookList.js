import React from "react";
import ReactDom from "react-dom";
import books from "./books";

//CSS
import "./index.css";

// Constants

const Book = (props) => {
  const { img, title, author, id } = props; // objet destructuring the properties

  const url = `/comprar/${id}`

  return (
    <article className="book">
      <div className="imageContainer">
        <img src={img} alt="cover" />
      </div>

      <h1 className="book-title">{title}</h1>

      <h4>{author}</h4>
      {props.children}
      <a href={url}>
        <button className="btn-comprar">Comprar</button>
      </a>
    </article>
  );
};

function BookList() {
  return (
    <>
      {/* <div className="title">
        <h1>Novedades</h1>
      </div> */}
      <section className="bookList">
        {books.map((book) => (
          <Book 
            img={book.img} 
            title={book.title} 
            author={book.author}
            id = {book.id}
             
          />
        ))}
      </section>
    </>
  );
}

export default BookList;
