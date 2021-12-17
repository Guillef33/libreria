import React, { useState } from "react";
import books from "./books";

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
      
      {books
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return <p>{val.title}</p>;
        })}
    </div>
  );
}

export default SearchBar;
