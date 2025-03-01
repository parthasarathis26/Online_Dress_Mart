// src/components/AdminAdd.js
import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import '../styles/AdminAdd.css';

const AdminAdd = () => {
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    photo: '',
    rating: '',
    prices: '',
    discount: '',
    description: '',
    size_options: '',
    category: '',
    gender: ''
  });

  const handleAdd = async () => {
    try {
      const productToSend = { 
        ...newProduct, 
        size_options: newProduct.size_options.split(',').map(size => size.trim()) // Convert size string to array
      };

      await axios.post('http://localhost:5000/api/products/add', productToSend);
      alert('Product Added Successfully');

      setNewProduct({
        product_name: '',
        photo: '',
        rating: '',
        prices: '',
        discount: '',
        description: '',
        size_options: '',
        category: '',
        gender: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <>
    <AdminNavbar />
    <div className="admin-add">
      <h1>Add New Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.product_name}
        onChange={(e) => setNewProduct({ ...newProduct, product_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={newProduct.photo}
        onChange={(e) => setNewProduct({ ...newProduct, photo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={newProduct.prices}
        onChange={(e) => setNewProduct({ ...newProduct, prices: e.target.value })}
      />
      <input
        type="text"
        placeholder="Rating"
        value={newProduct.rating}
        onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })}
      />
      <input
        type="text"
        placeholder="Discount"
        value={newProduct.discount}
        onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newProduct.description}
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Sizes (comma separated)"
        value={newProduct.size_options}
        onChange={(e) => setNewProduct({ ...newProduct, size_options: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={newProduct.category}
        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="Gender"
        value={newProduct.gender}
        onChange={(e) => setNewProduct({ ...newProduct, gender: e.target.value })}
      />
      <button onClick={handleAdd}>Add Product</button>
    </div>
    </>
  );
};

export default AdminAdd;
