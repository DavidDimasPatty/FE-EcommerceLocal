import React, { useState, useEffect } from "react";

const headerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "10px",
    textAlign: "center"
  };

const Footer = () => {
    return (
        <footer style={headerStyle}>
            <p>© 2024 E-Commerce, All Rights Reserved</p>
        </footer>
    );
}

export default Footer;