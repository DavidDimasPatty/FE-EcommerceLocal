import React, { useState, useEffect } from "react";
import CartBar from "./cart";
import Notification from "./notification";
const Header = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleCart = () => {
        setIsNotificationOpen(false);
        setIsCartOpen(!isCartOpen);
    };
    const toggleNotification = () => {
        setIsCartOpen(false);
        setIsNotificationOpen(!isNotificationOpen);
    };
    return (
        <header className="header">
            <div className="logo">E-Commerce</div>
            <button className="burger-btn" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`cart-bar ${isCartOpen ? 'open' : ''}`}>
                <div className={`toogle-cart-bar ${isCartOpen ? 'open' : ''}`}>
                    <a href="#" onClick={toggleCart}>X</a>
                </div>
                <CartBar />
            </div>

            <div className={`notification-bar ${isNotificationOpen ? 'open' : ''}`}>
                <Notification/>
            </div>

            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a  href="#" onClick={toggleNotification} className={`${isMenuOpen ? '' : ''}`}>
                            <i className={`bi ${isMenuOpen ? '' : 'fs-4 bi-bell'}`}></i>
                            {isMenuOpen ? 'Notifications' : ''}
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={toggleCart} className={`${isMenuOpen ? '' : ''}`}>
                            <i className={`bi ${isMenuOpen ? '' : 'fs-4 bi-basket'}`}></i>
                            {isMenuOpen ? 'My Cart' : ''}
                        </a>
                    </li>
                    <li><a href="/login" className={`${isMenuOpen ? '' : 'btn btn-light text-dark'}`}>Login</a></li>
                </ul>
            </nav>


        </header>
    );
};

export default Header;