import React, { useState } from "react";
import { useDispatch } from "react-redux";
import productList from "../products-list.json";
import "./product.scss";
import Product from "./Product";
import Navigation from "./navbar";
import Cart from "./cart";
import TextArea from "./textArea";
import ProductDetail from "./productDetail";

const ProductList = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Tracks selected product
  const [isCartOpen, setCartOpen] = useState(false); // Tracks cart visibility

  let result = productList.filter(function (obj) {
    if (checkedCategories.length > 0) {
      return (
        obj.title.toLowerCase().includes(inputValue.toLowerCase()) &&
        checkedCategories.includes(obj.category)
      );
    } else {
      return obj.title.toLowerCase().includes(inputValue.toLowerCase());
    }
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Show product detail
    setCartOpen(false); // Ensure cart is closed
  };

  const handleBackToList = () => {
    setSelectedProduct(null); // Back to product list
  };

  const handleCartOpen = () => {
    setSelectedProduct(null); // Ensure no product detail is visible
    setCartOpen(true); // Open the cart
  };

  return (
    <div className="mainDiv">
      <Navigation
        inputValue={inputValue}
        setInputValue={setInputValue}
        setOpen={handleCartOpen} // Trigger cart opening
      />
      <div className="ikili">
        {selectedProduct === null && !isCartOpen && <TextArea />}
        {selectedProduct === null && !isCartOpen && <hr />}
        <div className="page">
          {isCartOpen ? (
            <Cart onBack={() => setCartOpen(false)} />
          ) : selectedProduct ? (
            <ProductDetail
              product={selectedProduct}
              onBack={handleBackToList}
            />
          ) : (
            <>
              <h1 className="products">PRODUCTS</h1>
              <div className="cardList">
                {result.map((value, index) => (
                  <Product
                    product={value}
                    key={index}
                    onClick={() => handleProductClick(value)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

      </div>
      <img src="footerReplace.svg" alt="footer" className="footer" />
    </div>
  );
};

export default ProductList;
