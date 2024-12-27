import React from "react";
import { useSelector } from "react-redux";

const Navigation = ({ inputValue, setInputValue, setOpen, onBack }) => {
  const cartItems = useSelector((state) => state.cart);
  let sum = 0;

  cartItems.forEach((element) => {
    sum += element.count;
  });

  return (
    <nav className="navBar">
      <div className="nav">
        <img src="../logo.svg " alt="logo" className="logo" onClick={onBack} />
        <input
          className="search"
          type="text"
          placeholder="SEARCH FOR PRODUCTS..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="flex logo-div">
        <div className="cart-logo">
          <span className="cart-count">{sum}</span> {/* Optional Cart Count */}
          <img
            src="../cart.svg"
            alt="cart"
            className="logo-cart"
            onClick={() => setOpen()} // Opens the cart
          />
        </div>
        <div>      <img src="../profil.svg " alt="profile" className="logo-pp" /></div>
      </div>

    </nav>
  );
};

export default Navigation;
