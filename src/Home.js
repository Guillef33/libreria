import React from "react";
import ReactDom from "react-dom";

//stateless function component
// always return JSX
import BookList from "./BookList";


//CSS
import "./index.css";

function Home() {
  return (
    <>
      {/* <div className="title">
        <h1>Pagina Home</h1>
      </div> */}
    <BookList />
    </>
  );
}



export default Home;