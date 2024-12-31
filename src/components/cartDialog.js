import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const CartDialog = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  let sum = 0;

  cartItems.forEach((element) => {
    sum += element.count * element.price;
  });

  return (
    <div className={`cart-dialog ${isOpen ? "open" : ""}`}>
      <div className="cart-dialog__content">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <div key={item.id} className="product-container">
                <p className="cart-line">
                  {item.name} X {item.count}
                </p>

                <p>{item.price * item.count} €</p>
                <button
                  class="button-78"
                  role="button"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <p>Total: {sum}€</p>
          </ul>
        )}
        <button onClick={onClose} class="button-78" role="button">
          Close
        </button>
      </div>
    </div>
  );
};

export default CartDialog;
