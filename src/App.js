import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Templates
import Nav from "./Nav";
// Components
import Comprar from "./Comprar";
import Home from "./Home";
import Contacto from "./Contacto";
import Cart from "./Cart";
import Footer from "./Footer";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import QuienesSomos from "./QuieneSomos";
import Names from "./components/Names";
import FoodList from "./FoodBooks";
import MusicList from "./MusicBooks";

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
          <Route path="/names" component={Names} />
          <Route path="/food" component={FoodList} />
          <Route path="/music" component={MusicList} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
