import React, { useState, useEffect } from "react";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">E-Commerce</div>
            <button className="burger-btn" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="/" className={`${isMenuOpen ? '' : ''}`}>
                            <i className={`bi ${isMenuOpen ? '' : 'fs-4 bi-bell'}`}></i>
                            {isMenuOpen ? 'Notifications' : ''}
                        </a>
                    </li>
                    <li>
                        <a href="/" className={`${isMenuOpen ? '' : ''}`}>
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