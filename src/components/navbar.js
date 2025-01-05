import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navigation = ({ inputValue, setInputValue, setOpen, onBack, showSearchBar, onCategorySelect }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Tracks dropdown visibility
  const cartItems = useSelector((state) => state.cart);
  const categories = [
    "Notebooks and Notepads",
    "Pens and Writing Supplies",
    "Art Supplies",
    "Office and Desk Accessories",
    "Bags and Pencil Cases",
    "Filing and Archiving",
    "School Supplies",
  ];

  let sum = 0;
  cartItems.forEach((element) => {
    sum += element.count;
  });

  return (
    <nav className="navBar">
      <div className="nav">
        <img src="../logo.svg " alt="logo" className="logo" onClick={onBack} />
        <div className="category-dropdown">
          <p
            className="clickableB"
            onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggles dropdown
          >
            CATEGORY
          </p>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    onCategorySelect(category); // Set selected category
                    setDropdownOpen(false); // Close dropdown
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
        {showSearchBar && (
          <input
            className="search"
            type="text"
            placeholder="SEARCH FOR PRODUCTS..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
      </div>
      <div className="flex logo-div">
        <img
          src="../cart.svg"
          alt="cart"
          className="logo-cart"
          onClick={() => setOpen()} // Opens the cart
        />
      </div>
    </nav>
  );
};

export default Navigation;
