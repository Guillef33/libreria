import React, { useState } from "react";
import books from "./books";
import Book from './Book';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div className="bookList">
        {books
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              (val.category.toLowerCase().includes(searchTerm.toLowerCase()),
              val.author.toLowerCase().includes(searchTerm.toLowerCase()),
              val.title.toLowerCase().includes(searchTerm.toLowerCase()))
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <>
                <Book
                  img={val.img}
                  title={val.title}
                  author={val.author}
                  id={val.id}
                  category={val.category}
                  // Agregue esto porque salia un error de agregar una key a la bookList
                  key={val.id}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
