import React from "react";
import ReactDom from "react-dom";
import Product from "./Product";
import books from "../components/books";
import { useParams } from "react-router-dom";

function Cart({ itemCount }) {

  return (
    <header className="container">
      <h1>Shopping Cart</h1>

      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>

      <span className="count">{itemCount} items in the bag</span>
    </header>
  );
}

export default Cart;

// function formatCurrency(value) {
//   return Number(value).toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
// }
