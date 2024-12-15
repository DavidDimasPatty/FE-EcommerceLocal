import React, { useState, useEffect } from "react";

function LeftBar() {
    const [isOpen, setIsOpen] = useState(false); // State untuk membuka/menutup sidebar
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <aside className={`left-bar ${isOpen ? 'open' : ''}`}>
        <button className={`toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          {isOpen ? '<<' : '>>'}
        </button>
        <ul>
          <a href="/" className="fs-3 logoLeft">E-Commerce</a>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </aside>
    );
  }
  
  export default LeftBar;