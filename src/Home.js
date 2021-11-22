import React from "react";
import ReactDom from "react-dom";
import { CarouselControl } from "reactstrap";

//stateless function component
// always return JSX
import BookList from "./BookList";
import Hero from "./components/Hero";




//CSS
import "./index.css";

function Home() {
  return (
    <>
      <Hero />
      <BookList />

    </>
  );
}



export default Home;