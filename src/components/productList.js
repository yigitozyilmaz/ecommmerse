import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import productList from "../products-list.json";
import "./product.scss";
import Product from "./Product";
import Navigation from "./navbar";
import CartDialog from "./cartDialog";
import TextArea from "./textArea";

const ProductList = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isCartDisplay, setCartDisplay] = useState(false);
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
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setCheckedCategories([...checkedCategories, event.target.value]);
    } else {
      setCheckedCategories(
        checkedCategories.filter((value) => value !== event.target.value)
      );
    }
  };

  return (
    <div className="mainDiv">
      <Navigation
        inputValue={inputValue}
        setInputValue={setInputValue}
        setOpen={setCartDisplay}
      />
      <div className="ikili">
        <TextArea />
        <hr></hr>
        <div className="page">
          <h1 className="products"> PRODUCTS</h1>
          <div className="cardList">
            {" "}
            {result.map((value, index) => (
              <Product product={value} key={index} />
            ))}{" "}
          </div>
          {isCartDisplay && (
            <CartDialog
              isOpen={isCartDisplay}
              onClose={() => setCartDisplay(false)}
            />
          )}
        </div>
      </div>
      <img src="footerReplace.svg" alt="footer" className="footer" />
    </div>
  );
};

export default ProductList;
