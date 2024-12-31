import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const Product = ({ product, onClick }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }


  return (
    <div className="card" onClick={onClick}>
      <img src={product.image} id="img"></img>
      <div className="card-content">
        <h3 className="h3ler">{truncateText(product.title)}</h3>
        <h3 className="h3ler prize">{product.price} €</h3>
      </div>
    </div>

  );
};

export default Product;
