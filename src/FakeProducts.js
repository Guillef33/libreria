import React from "react";

//CSS
import "./index.css";

const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products").json();
  console.log(getProducts)
  )

  const getProductsAll = async () => 
  await (fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json)))

            

function fakeProducts() {
  return (
    <div className="hero-section">
      <h3>Libreria independiente con textos en ingles. Importador oficial</h3>
    </div>
  );
}

export default Hero;
