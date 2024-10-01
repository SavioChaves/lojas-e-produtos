import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

import Home from "./components/Home";
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Minha Loja de Produtos</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:storeId" element={<Store />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
