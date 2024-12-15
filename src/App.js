import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import LeftBar from "./components/layout/leftbar";
import "../src/assets/style/global.css"
import DetailProduct from "./components/DetailProduct";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <div style={{ flex: 1, padding: '40px',marginTop:'55px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailProduct" element={<DetailProduct />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
