import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Templates
import Nav from "./Nav";
// Components
import ProductPage from "./pages/Product";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Checkout from "./pages/Checkout";
import Footer from "./Footer";
import BookList from "./components/BookList";
import QuienesSomos from "./pages/QuieneSomos";
import Names from "./components/Names";
import AddBooks from "./components/AddBooks";
import FoodList from "./pages/FoodBooks";
import MusicBooks from "./pages/MusicBooks";
import BioBooks from "./pages/BioBooks";
import SearchBar from "./components/SearchBar";
import Cart from "./pages/Cart";
import Products from "./components/Products";
import Product from "./components/Product";

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
          {/* <Route path="/productores/:idUrl" component={ProductPage} /> */}
          <Route path="/products/:id" component={Product} />
          <Route path="/products" component={Products} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/cart" component={Cart} />
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
