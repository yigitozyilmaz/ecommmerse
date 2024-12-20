import React from "react";
import { useSelector } from "react-redux";


const Navigation = ({ inputValue, setInputValue, setOpen }) => {
  const cartItems = useSelector((state) => state.cart);
  let sum = 0;

  cartItems.forEach((element) => {
    sum += element.count;
  });
  return (
    <nav className="navBar">
      <div className="nav">
        <img src="../logo.svg " alt="logo" className="logo" />
        <input
          className="search"
          type="text"
          placeholder="SEARCH FOR PRODUCTS..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="flex logo-div">
        <img src="../cart.svg " alt="logo" className="logo-cart" onClick={() => setOpen(true)} />
        <img src="../profil.svg " alt="logo" className="logo-pp" />
      </div>
    </nav>
  );
};

export default Navigation;
