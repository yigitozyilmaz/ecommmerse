import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const Product = ({ product }) => {
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
    <div className="card">
      <img src={product.image} id="img"></img>
      <div className="card-content">
        <h3 className="h3ler">{truncateText(product.title, 20)}</h3>
        <p>{truncateText(product.description, 55)}</p>
        <h3 className="h3ler">{product.price} $</h3>
      </div>
    </div>

  );
};

export default Product;
