import React, { useState }  from "react";
import ReactDom from "react-dom";
import books from "./books";
import { Button } from "./Button";

//CSS
import "../index.css";

// Constants

const Book = (props) => {
  const { img, title, author, id, category } = props; // objet destructuring the properties

  const url = `/comprar/${id}`;

  const [style, setStyle] = useState({ display: "none" });

   return (
     <article
       className="book productBox"
       onMouseEnter={(e) => {
         setStyle({ display: "block" });
       }}
       onMouseLeave={(e) => {
         setStyle({ display: "none" });
       }}
     >
       <div className="imageContainer">
         <img src={img} alt="cover" className="imageSize" />
         {/* Aca se podria hacer algo bueno con componentes */}
         <a href={url}>
           <div className="hoverState" style={style}>
             <input name="talle" type="checkbox" />
             <input name="color" type="checkbox" />
             {/* Incluir el href en el boton? */}
             <Button className="btn-comprar">Comprar</Button>
           </div>
         </a>
       </div>
       <h1 className="book-title">{title}</h1>
       <h4>{author}</h4>
       <p className="Categoria" style={{ margin: "auto" }}>
         Genero: {category}
       </p>
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
