// src/components/Home.js
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Card from './Card';
import productsData from '../assets/clothing_products_400.json';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(20); // Show 20 products initially
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: 1,
    size: ''
  });

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 20); // Load 20 more each click
  };

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    alert(`${product.product_name} has been added to your cart.`);
  };

  const buyNow = (product) => {
    setCheckoutProduct(product);
    setFormData({
      ...formData,
      size: product.size_options[0] // Default to first size
    });
  };

  const closeCheckout = () => {
    setCheckoutProduct(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBuy = () => {
    alert('Order placed successfully! Cash on Delivery.');
    setCheckoutProduct(null);
  };

  return (
    <>
      <Navigation />
      <div className="home-content">
        <h1>Discover the Latest Trends</h1>
        <div className="product-grid">
          {products.slice(0, visible).map((product, index) => (
            <Card key={index} product={product} onClick={() => openDetails(product)} />
          ))}
        </div>
        {visible < products.length && (
          <button onClick={loadMore} className="load-more">
            Load More
          </button>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="product-details-overlay" onClick={closeDetails}>
            <div className="product-details-container" onClick={(e) => e.stopPropagation()}>
              <span className="close-symbol" onClick={closeDetails}>&times;</span>
              
              <div className="product-details-left">
                <img src={selectedProduct.photo} alt={selectedProduct.product_name} />
              </div>
              <div className="product-details-right">
                <h2>{selectedProduct.product_name}</h2>
                <p>Price: {selectedProduct.prices} <span className="discount">{selectedProduct.discount}</span></p>
                <p>Rating: ⭐ {selectedProduct.rating}</p>
                <p>Description: {selectedProduct.description}</p>
                <p>Available Sizes:</p>
                <ul>
                  {selectedProduct.size_options.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
                
                <button onClick={() => addToCart(selectedProduct)} className="add-to-cart">Add to Cart</button>
                <button onClick={() => buyNow(selectedProduct)} className="buy-now">Buy Now</button>
                <button onClick={closeDetails} className="close-details">Close</button>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Container */}
        {checkoutProduct && (
          <div className="checkout-overlay" onClick={closeCheckout}>
            <div className="checkout-container" onClick={(e) => e.stopPropagation()}>
              <h2>Checkout</h2>
              <p>{checkoutProduct.product_name}</p>
              <p>Price: {checkoutProduct.prices}</p>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                >
                  {checkoutProduct.size_options.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                  ))}
                </select>
                <p><strong>Cash on Delivery</strong></p>
                <div className="button-group">
                  <button type="button" onClick={handleBuy} className="buy-now">Buy</button>
                  <button type="button" onClick={closeCheckout} className="close-details">Close</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
