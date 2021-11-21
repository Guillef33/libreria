import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Templates
import Nav from "./Nav";
// Components
import BookList from "./BookList";
// Views
import Comprar from "./Comprar";
import Home from "./Home";
import Contacto from "./Contacto";
import Cart from "./Cart";
import Footer from "./Footer";
import Hero from "./Hero";
import QuienesSomos from "./QuieneSomos";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route exact path="/" component={Home} /> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          {/* components tipo screen */}
          <Route path="/quienes-somos" component={QuienesSomos} />
          <Route path="/catalogo" component={BookList} />
          <Route path="/comprar/:idUrl" component={Comprar} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
