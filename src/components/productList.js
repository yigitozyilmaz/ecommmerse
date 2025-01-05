import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import productList from "../products-list.json";
import "./product.scss";
import Product from "./Product";
import Navigation from "./navbar";
import Cart from "./cart";
import TextArea from "./textArea";
import ProductDetail from "./productDetail";
import Footer from "./Footer";
import TermsAndConditions from "./TermsAndConditions";
import CorporateSocialResponsibility from "./CorporateSocialResponsibility";
import EnvironmentalPolicy from "./EnvironmentalPolicy";
import AboutUs from "./AboutUs";
import PrivacyAndPolicy from "./PrivacyAndPolicy";
import Categories from "./categories";

const ProductList = () => {
  const dispatch = useDispatch();

  const [checkedCategories, setCheckedCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Tracks selected product
  const [isCartOpen, setCartOpen] = useState(false); // Tracks cart visibility
  const [currentView, setCurrentView] = useState("products");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    "Notebooks and Notepads",
    "Pens and Writing Supplies",
    "Art Supplies",
    "Office and Desk Accessories",
    "Bags and Pencil Cases",
    "Filing and Archiving",
    "School Supplies",
  ];

  const filteredProducts = productList.filter((product) => {
    // Eğer kategori seçiliyse sadece o kategorideki ürünleri filtrele
    if (selectedCategory) {
      return (
        product.category === selectedCategory &&
        product.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    // Eğer kategori seçili değilse global arama yap
    return product.title.toLowerCase().includes(inputValue.toLowerCase());
  });



  const handleProductClick = (product) => {
    setSelectedProduct(product); // Show product detail
    setCartOpen(false); // Ensure cart is closed
  };

  const handleBackToList = () => {
    setSelectedCategory(null); // Kategori seçimini sıfırla
    setSelectedProduct(null); // Ürün detayını kapat
    setCartOpen(false); // Sepeti kapat
    setCurrentView("products"); // Ürün görünümünü seç
  };

  const handleCartOpen = () => {
    setSelectedProduct(null); // Ensure no product detail is visible
    setCartOpen(true); // Open the cart
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  return (
    <div className="mainDiv">
      <Navigation
        inputValue={inputValue}
        setInputValue={setInputValue}
        setOpen={handleCartOpen} // Trigger cart opening
        onBack={handleBackToList}
        showSearchBar={!!selectedCategory}
        onCategorySelect={(category) => setSelectedCategory(category)}
      />
      <div className="ikili">
        {selectedProduct === null && !isCartOpen && currentView === "products" && <TextArea />}
        {selectedProduct === null && !isCartOpen && currentView === "products" && <hr />}
        <div className="page">
          {isCartOpen ? (
            <Cart onBack={() => setCartOpen(false)} />
          ) : selectedProduct ? (
            <ProductDetail
              product={selectedProduct}
              onBack={handleBackToList}
            />
          ) : currentView === "terms" ? (
            <TermsAndConditions />
          ) : currentView === "csr" ? (
            <CorporateSocialResponsibility />
          ) : currentView === "environmental" ? (
            <EnvironmentalPolicy />
          ) : currentView === "about" ? (
            <AboutUs />
          ) : currentView === "privacy" ? (
            <PrivacyAndPolicy />
          ) : (

            (!selectedCategory ? (
              <Categories
                categories={categories}
                onCategorySelect={(category) => setSelectedCategory(category)}
              />
            ) : (
              // Eğer kategori seçildiyse ürünleri göster

              <>
                <h1 className="products">PRODUCTS</h1><div className="cardList">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <Product key={index} product={product} onClick={() => handleProductClick(product)} />
                    ))
                  ) : (
                    <p>No products found.</p>
                  )}
                </div></>
            ))
          )}
        </div>

      </div>
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};

export default ProductList;
