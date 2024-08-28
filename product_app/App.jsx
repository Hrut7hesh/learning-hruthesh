import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductSearch from './components/ProductSearch';
import './App.css';

const API_BASE_URL = 'http://localhost:3000';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('An error occurred while fetching products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleCreateProduct = () => {
    setEditingProductId(null);
  };

  const handleEditProduct = (id) => {
    setEditingProductId(id);
  };

  const handleProductSaved = () => {
    setEditingProductId(null);
    fetchSearchResults();
  };

  const handleCancel = () => {
    setEditingProductId(null);
  };

  const handleDeleteProduct = () => {
    fetchSearchResults();
  };

  return (
    <div className="app-container">
      <h1>Product App</h1>
      {error && <div className="error-message">{error}</div>}
      <ProductForm
        productId={editingProductId}
        onProductSaved={handleProductSaved}
        onCancel={handleCancel}
      />
      <ProductSearch onSearchResults={handleSearchResults} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductList 
          searchResults={searchResults} 
          onEdit={handleEditProduct} 
          onDelete={handleDeleteProduct} 
        />
      )}
    </div>
  );
};

export default App;


