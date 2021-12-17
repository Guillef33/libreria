import React, {useState} from 'react';
import { StyledNavLink } from "../components/StyledNavLink";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Button } from "./Button";


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
        <NavLink to={url}>
          <div className="hoverState" style={style}>
            <Button className="btn-comprar">Comprar</Button>
          </div>
        </NavLink>
      </div>
      <h1 className="book-title">{title}</h1>
      <h4>{author}</h4>
      <p className="Categoria" style={{ margin: "auto" }}>
        Genero: {category}
      </p>
    </article>
  );
};

export default Book;