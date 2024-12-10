import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "../src/assets/style/global.css"

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
