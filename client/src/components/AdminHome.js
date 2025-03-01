import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import '../styles/AdminHome.css';

const AdminHome = () => {
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
    fetchProducts();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedProduct(products[index]);
  };

  const handleSave = async () => {
    await axios.put(`http://localhost:5000/api/products/update/${products[editIndex]._id}`, editedProduct);
    setEditIndex(null);
    fetchProducts();
  };

  return (
    <>
      <AdminNavbar />
      <div className="admin-home">
        <h1>Admin Dashboard</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product-item" key={product._id}>
              <img src={product.photo} alt={product.product_name} />
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedProduct.product_name}
                    onChange={(e) =>
                      setEditedProduct({ ...editedProduct, product_name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editedProduct.photo}
                    onChange={(e) =>
                      setEditedProduct({ ...editedProduct, photo: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editedProduct.prices}
                    onChange={(e) =>
                      setEditedProduct({ ...editedProduct, prices: e.target.value })
                    }
                  />
                  <button onClick={handleSave}>Save</button>
                </>
              ) : (
                <>
                  <h3>{product.product_name}</h3>
                  <p>Price: {product.prices}</p>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(product._id)}>Delete</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminHome;
