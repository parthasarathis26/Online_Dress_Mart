// src/components/Card.js
import React from 'react';
import '../styles/Card.css';

const Card = ({ product, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={product.photo} alt={product.product_name} className="product-image" />
      <h3>{product.product_name}</h3>
      <p>{product.prices} <span className="discount">{product.discount}</span></p>
    </div>
  );
};

export default Card;
