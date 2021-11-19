import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// import logo from "logo.svg";

class Nav extends Component {
  render() {
    return (
      <nav>
        <h2>
          <NavLink to="/" className="HeroLink">
            Libreria
          </NavLink>
        </h2>
        <ul className="header-nav-list">
          <li>
            <NavLink to="/catalogo" className="HeroLink">Catalogo</NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="HeroLink">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
