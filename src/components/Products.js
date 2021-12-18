import React, { useState, useEffect} from 'react';
import Skeleton from "react-loading-skeleton";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { StyledNavLink } from "./StyledNavLink";


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect (() => {
        const getProducts = async () =>  {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(response)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
          <>
            <div className="card">
              <Skeleton count={4}/>
            </div>
          </>
        );
    }

    const filterProduct = (cat) => {
      const updatedList = data.filter((x) => x.category === cat);
      setFilter(updatedList)
    }




    const ShowProducts = () => {
        return (
          <>
            <div>
              <button onClick={() => setFilter(data)}>All</button>
              <button onClick={() => filterProduct("men's clothing")}>Men</button>
              <button onClick={() => filterProduct("women's clothing")}>Women</button>
              <button onClick={() => filterProduct("jewelery")}>Electronic</button>
              <button onClick={() => filterProduct("electronics")}>Cars</button>
            </div>
            <div className="card-container">
              {filter.map((product) => {
                // const url = `/products/${product.id}`;
                return (
                  <div className="card">
                    <img src={product.image} alt="imagenes"></img>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <StyledNavLink to={`/products/${product.id}`}>
                      Comprar
                    </StyledNavLink>
                  </div>
                );
              })}
            </div>
          </>
        );
    }

    return (
      <div>
        <h2>Latest Products</h2>
        <div>{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    );
}

export default Products;