import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addCart } from '../redux/action' 
import { useParams } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { StyledNavLink } from "./StyledNavLink";

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // const dispatch = useDispatch();
    // const addProduct = (product) => {
    //   dispatch(addCart(product));
    // }

    useEffect(() => {
        const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
        console.log(response)
        }
    getProduct();
    }, []);

      const Loading = () => {
        return (
          <>
            <div>
              Loading...
            </div>
          </>
        );
      };

      const ShowProduct = () => {
        return (
          <>
            <div className="product-card">
              <img src={product.image} alt="imagenes"></img>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <StyledNavLink to="">Agregar al carrito</StyledNavLink>
              {/* onClick={() => addProduct(product)} */}
              <StyledNavLink to="/cart">Ir al carrito</StyledNavLink>
            </div>
          </>
        );
      };


    return (
      <div>
        <h2>Latest Products</h2>
        <div>{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    );


}

export default Product;