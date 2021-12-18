import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { StyledNavLink } from "./components/StyledNavLink";

// import logo from "logo.svg";
 
class Nav extends Component {

  // const [isActive] = useState(window.location.href.split('/').pop());

  render() {
    return (
      <nav>
        <h2>
          <StyledNavLink to="/" className="HeroLink">
            Libreria
          </StyledNavLink>
        </h2>
        <ul className="header-nav-list">
          <li>
            <StyledNavLink to="/quienes-somos" className="HeroLink">
              Quienes Somos
            </StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink to="/catalogo" className="HeroLink">
              Catalogo
            </StyledNavLink>
          </li> */}
          <li>
            <StyledNavLink to="/search" className="HeroLink">
              Buscador
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/food" className="HeroLink">
              Food
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/music" className="HeroLink">
              Music
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/biography" className="HeroLink">
              Biography
            </StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink to="/add" className="HeroLink">
              Agregar
            </StyledNavLink>
          </li> */}

          <li>
            <StyledNavLink to="/products" className="HeroLink">
              Products API
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/checkout" className="HeroLink">
              Checkout
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contacto" className="HeroLink">
              Contacto
            </StyledNavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
