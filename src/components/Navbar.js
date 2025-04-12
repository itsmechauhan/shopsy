import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = ({ setToken, token }) => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Update cart count dynamically on cart changes
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };

    updateCartCount();

    window.addEventListener('storage', updateCartCount); // in case multiple tabs modify cart
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  const LogOutHandler = () => {
    setToken("");
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="logo">
        Shopsy
        
      </Link>
      

      {token && (
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/cart" className="nav-item">
            Cart <span className="cart-badge">{cartCount}</span>
          </Link>
          <button className="logout-btn" onClick={LogOutHandler}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
