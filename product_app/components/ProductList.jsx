import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const API_BASE_URL = 'http://localhost:3000';

const ProductList = ({ searchResults, onEdit, onDelete }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${API_BASE_URL}/products/${productId}`);
      setSuccessMessage('Product deleted successfully.');
      onDelete();
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('An error occurred while deleting the product. Please try again.');
    }
  };

  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {searchResults.length === 0 ? (
        <p className="no-products-message">No products found.</p>
      ) : (
        <div className="products-container">
          {searchResults.map(product => (
            <div key={product._id} className="product-card">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-availability">Availability: {product.availability}</p>
              <div className="product-actions">
                <button 
                  onClick={() => onEdit(product._id)}
                  className="edit-button"
                  aria-label={`Edit ${product.name}`}
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(product._id)}
                  className="delete-button"
                  aria-label={`Delete ${product.name}`}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
