// src/components/ProductDetail.js
import React from "react";
import "./ProductDetail.scss"; // Import the corresponding CSS file
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const ProductDetail = ({ product, onBack, onAddToCart }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    return (
        <div className="product-detail-container">
            <button className="back-button" onClick={onBack}>
                HOME
            </button>
            <span>></span>
            <button className="back-button-1" disabled="true">
                PRODUCTS
            </button>
            <div className="product-detail-content">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <h2 className="product-price">${product.price}</h2>
                    <div className="product-actions">
                        <div className="quantity-controls">
                            <button className="quantity-button">-</button>
                            <span className="quantity-value">1</span>
                            <button className="quantity-button">+</button>
                        </div>
                        <button className="add-to-cart-button" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
