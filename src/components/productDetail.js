// src/components/ProductDetail.js
import React, { useState } from "react";
import "./ProductDetail.scss"; // Import the corresponding CSS file
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const ProductDetail = ({ product, onBack }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1); // State to manage quantity

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity })); // Dispatch the action
        toast.success("Product added to cart!", {
            position: "bottom-center",
            autoClose: 3000, // Toast will close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored", // Colored theme for success message
        }); // Show toast notification
    };

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1); // Increase quantity
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Decrease quantity but not below 1
    };

    return (
        <div className="product-detail-container">
            <button className="back-button" onClick={onBack}>
                HOME
            </button>
            <span>></span>
            <button className="back-button-1" disabled>
                PRODUCTS
            </button>
            <div className="product-detail-content">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.long_desc}</p>
                    <h2 className="product-price">${product.price}</h2>
                    <div className="product-actions">
                        <div className="quantity-controls">
                            <button className="quantity-button" onClick={handleDecrement}>
                                -
                            </button>
                            <span className="quantity-value">{quantity}</span>
                            <button className="quantity-button" onClick={handleIncrement}>
                                +
                            </button>
                        </div>
                        <button className="add-to-cart-button" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-center" // Alt ortada gösterir
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default ProductDetail;
