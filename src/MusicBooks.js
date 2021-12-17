import React from "react";
import books from "./components/books";
import Book from "./components/Book";


import { Button } from "./components/Button";

function updateCarrito () {
  console.log(`Se agrego al carrito`);
}

 // Quisiera agregar el titulo ${filteredBook.title}

function MusicBooks() {
  return (
    <div className="bookList">
      {books
        .filter((book) => book.category === "Music")
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


// function MusicList() {
//   return (
//     <>
//       {/*Esto no funciona bien, repite el mismo libro en cada row */}
//       <section className="bookList">
//         {books.map((Musicbook) => (
//           <MusicBooks
//             img={Musicbook.img}
//             title={Musicbook.title}
//             author={Musicbook.author}
//             id={Musicbook.id}
//             category={Musicbook.category}
//           />
//         ))}
//       </section>
//     </>
//   );
// }

export default MusicBooks;

    