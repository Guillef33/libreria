import React from "react";
import ReactDom from "react-dom";
import { CarouselControl } from "reactstrap";

//stateless function component
// always return JSX
import BookList from "./components/BookList";
import Hero from "./components/Hero";
import MusicBook from "./MusicBooks";





//CSS
import "./index.css";

function Home() {
  return (
    <>
      <Hero />
      {/* <h2 className="titulo-home">El genero que mas te gusta</h2>
      <MusicBook /> */}
      <h2 className="titulo-home">Novedades del ultimo mes</h2>
      <BookList />
    </>
  );
}



export default Home;