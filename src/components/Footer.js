import React from "react";
import "./Footer.scss";
import Cards from "./cards.svg";

const Footer = ({ setCurrentView }) => {
    return (
        <footer className="footer-container">
            <div className="footer-banner">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>

            <div className="footer-content">
                <div className="footer-section">
                    <img src="../logo.svg" alt="logo" className="logo" />
                    <p className="footer-description">
                        KEKO Office Products is one of Bulgaria’s leading office product companies.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Customer Care</h4>
                    <p onClick={() => setCurrentView("about")} className="clickable">About Us</p>
                    <p onClick={() => setCurrentView("contact")} className="clickable">Contact Us</p>
                </div>

                <div className="footer-section">
                    <h4>Information</h4>
                    <p onClick={() => setCurrentView("terms")} className="clickable">Terms & Conditions</p>
                    <p onClick={() => setCurrentView("csr")} className="clickable">Corporate Social Responsibility</p>
                    <p onClick={() => setCurrentView("environmental")} className="clickable">Environmental</p>
                    <p onClick={() => setCurrentView("privacy")} className="clickable">Privacy Policy</p>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>District of Nadezhda, bl. 31, entry B, fl. 6, Sofia, Bulgaria</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Keko Stationary © 2000-2023, All Rights Reserved</p>
                <div className="footer-icons">
                    <img src={Cards} alt="CardIcon" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
