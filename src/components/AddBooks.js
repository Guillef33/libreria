import React, {useState} from "react";
import books from './books'

import './addBook.css'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(books);

    const [addBook, setAddBook] = useState();


  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

    // function handleSubmit(e) {
    //   e.preventDefault();
    //   if (books.length >= 0) {
    //     if (!addBook || addBook === " ") {
    //       alert("Debes agregar un titulo");
    //     } else if (validarRepetidos(books, books.addBook) !== -1) {
    //       alert("Ese regalo esta repetido");
    //     } else {
    //       let newContainer = regalo.gifs;
    //       newContainer[newContainer.length] = {
    //         id: regalo.gifs.length + 1,
    //         title: addGift,
    //         url: url,
    //         cantidad: cantidad, /// aca estamos agregando un atributo al array gift, que es una constante del componente padre List. Y este atributo lo pasaremos como prop al componente hijo Counter
    //         dedicatoria: dedicatoria,
    //         metodo: "agregar",
    //       };
    //       setRegalo({
    //         ...regalo,
    //         gifs: newContainer,
    //         addGift: "",
    //         inicialState: true,
    //         url: "",
    //         dedicatoria: "",
    //         metodo: "agregar",
    //       });

    //       // localStorage.setItem("Nuevo Regalo", JSON.stringify(newContainer));
    //     }
    //   }
    // }

          function handleSubmit (e) {
            e.preventDefault();
            console.log(books)
            let newBook = books;
          } 


  return (
    <>
      {people.map((person) => {
        const { id, title } = person;
        return (
          <form onSubmit={handleSubmit}>
            <div key={id} className="item">
              <h4>{title}</h4>
              <input
                type="text"
                placeholder="Agrega regalo..."
                onChange={(e) => setAddBook(e.target.value)}
                autoFocus
              />
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          </form>
        );
      })}
      <button className="btn" onClick={() => setPeople([])} style={{width: "100%"}}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
