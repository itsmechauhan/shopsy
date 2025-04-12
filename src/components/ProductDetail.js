import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useCart } from '../context/CartContext'; // ✅ Import the hook from context

const ProductDetail = () => {
  const { id } = useParams();  // Get the product ID from URL params
  const [product, setProduct] = useState(null);  // State to hold product data
  const [loading, setLoading] = useState(false);  // State for loading indicator
  const { addToCart } = useCart();  // Get the addToCart function from context

  // Fetch product data when the component mounts or id changes
  useEffect(() => {
    setLoading(true);  // Set loading state to true when starting fetch
    axios.get(`https://fakestoreapi.com/products/${id}`)  // Fetch product details from API
      .then(res => setProduct(res.data))  // Update product state with API response
      .catch(err => console.error(err))  // Log any errors
      .finally(() => setLoading(false));  // Set loading state to false after fetching
  }, [id]);  // Add 'id' as a dependency to re-fetch when the product ID changes

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product);  // Add the product to the cart using the context function
    alert(`✅ Added "${product.title}" to cart!`);

    // Update localStorage to reflect the current cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);  // Add the product to the cart array
    localStorage.setItem('cart', JSON.stringify(cart));  // Save the updated cart in localStorage

    // Fire custom event to notify Navbar about cart update
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // Show loading indicator while data is being fetched
  if (loading) return <h2>Loading...</h2>;
  
  // Show error message if product not found
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="detail-info">
        <h1>{product.title}</h1>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Add to Cart 🛒</button>
      </div>
    </div>
  );
};

export default ProductDetail;
