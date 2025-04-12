import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';

import React, { useState } from 'react';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <CartProvider>
      <Router>
        <Navbar setToken={setToken} token={token} />
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </>
          ) : (
            <Route path="*" element={<Login token={token} setToken={setToken} />} />

          )}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;


