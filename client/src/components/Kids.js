// src/components/Kids.js
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Card from './Card';
import productsData from '../assets/clothing_products_400.json';
import '../styles/Home.css';

const Kids = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(20);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);

  useEffect(() => {
    const filteredProducts = productsData.filter(
      (product) => product.gender === 'Kids'
    );
    setProducts(filteredProducts);
  }, []);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 20);
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
  };

  const closeCheckout = () => {
    setCheckoutProduct(null);
  };

  const handleBuy = () => {
    alert('Order placed successfully! Cash on Delivery.');
    closeCheckout();
  };

  return (
    <>
      <Navigation />
      <div className="home-content">
        <h1>Kid's Collection</h1>
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

        {checkoutProduct && (
          <div className="product-details-overlay" onClick={closeCheckout}>
            <div className="checkout-container" onClick={(e) => e.stopPropagation()}>
              <h2>Checkout</h2>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Phone Number" required />
                <input type="text" placeholder="Address" required />
                <select>
                  <option>Quantity</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <select>
                  <option>Select Size</option>
                  {checkoutProduct.size_options.map((size, index) => (
                    <option key={index}>{size}</option>
                  ))}
                </select>
                <p>Cash on Delivery</p>
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

export default Kids;
