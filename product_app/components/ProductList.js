import React from 'react';
import axios from 'axios';
import '../App.css';

const ProductList = ({ searchResults, onEdit, onDelete }) => {

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:3000/products/${productId}`)
            .then(() => {
                onDelete();
            })
            .catch(error => console.error('Error deleting product:', error));
    };

    return (
        <div className="product-list-container">
            <h1>Product List</h1>
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
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDelete(product._id)}
                                    className="delete-button"
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
