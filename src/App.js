import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Templates
import Nav from "./Nav";
// Components
import Product from "./Product";
import Home from "./Home";
import Contacto from "./Contacto";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import QuienesSomos from "./QuieneSomos";
import Names from "./components/Names";
import AddBooks from "./components/AddBooks";
import FoodList from "./FoodBooks";
import MusicBooks from "./MusicBooks";
import BioBooks from "./BioBooks";
import SearchBar from "./components/SearchBar";


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
          <Route path="/product/:idUrl" component={Product} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/cart" component={Product} />
          <Route path="/names" component={Names} />
          <Route path="/food" component={FoodList} />
          <Route path="/biography" component={BioBooks} />
          <Route path="/music" component={MusicBooks} />
          <Route path="/add" component={AddBooks} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/search" component={SearchBar} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
