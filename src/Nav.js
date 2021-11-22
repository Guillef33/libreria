import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { StyledNavLink } from "./components/StyledNavLink";

// import logo from "logo.svg";

class Nav extends Component {
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
          <li>
            <StyledNavLink to="/catalogo" className="HeroLink">
              Catalogo
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
