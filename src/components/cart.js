import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import { removeFromCart, addToCart } from "../redux/actions";

const Cart = ({ onBack }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const handleIncrement = (item) => {
        dispatch(addToCart({ ...item, quantity: 1 }));
    };

    const handleDecrement = (item) => {
        if (item.count > 1) {
            dispatch({
                type: "ADD_TO_CART",
                payload: { ...item, quantity: -1 },
            });
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.count, 0);
    };

    return (
        <div className="cart-container">
            <button className="back-button" onClick={onBack}>
                HOME
            </button>
            <span>></span>
            <button className="back-button-1" disabled>
                PRODUCTS
            </button>
            <h1 className="CartBaslik">YOUR CART</h1>
            <div className="cart-content">
                {/* Left side: Cart Items */}
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <h2>€{item.price}</h2>
                            </div>
                            <div className="quantity-controls">
                                <button
                                    className="quantity-button"
                                    onClick={() => handleDecrement(item)}
                                >
                                    -
                                </button>
                                <span className="quantity-value">{item.count}</span>
                                <button
                                    className="quantity-button"
                                    onClick={() => handleIncrement(item)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="remove-button"
                                onClick={() => handleRemove(item.id)}
                            >
                                <i class="fa-solid fa-trash" ></i>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Right side: Order Summary */}
                <div className="cart-summary-1">
                    <h2 className="baslik">ORDER SUMMARY</h2>
                    <p>
                        <strong>Subtotal:</strong> €{calculateSubtotal().toFixed(2)}
                    </p>
                    <p>
                        <strong>Discount:</strong> €0
                    </p>
                    <p>
                        <strong>Delivery Fee:</strong> €0
                    </p>
                    <h3>
                        <strong>Total:</strong> €{calculateSubtotal().toFixed(2)}
                    </h3>
                    <button className="checkout-button">Go to Checkout →</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
