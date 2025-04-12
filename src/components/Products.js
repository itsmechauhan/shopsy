import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
      const res = await axios.get(url);
      setData(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      <div className="filter-bar">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <h1>Loading...</h1>}

      <div className="product-grid">
        {filteredData.map((product) => (

<Link to={`/product/${product.id}`} className="card" key={product.id}>
  <div><img src={product.image} alt="#" /></div>
  <div className="card-description">
    <h3 className="title">{product.title}</h3>
    <div>
      <span className="price">${product.price}</span>
      <span className="mrp">MRP: ${((product.price * 0.3) + product.price).toFixed(2)}</span>
    </div>
  </div>
</Link>          

        ))}
      </div>
    </div>
  );
};

export default Products;
