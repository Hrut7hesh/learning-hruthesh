import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SearchForm from './components/Search';
import './App.css';


const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  const fetchSearchResults = () => {
    axios.get('http://localhost:3000/products')
        .then(response => setSearchResults(response.data))
        .catch(error => console.error(error));
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
    <div>
      <h1>Product App</h1>
      <ProductForm
          productId={editingProductId}
          onProductSaved={handleProductSaved}
          onCancel={handleCancel}
      />
      <SearchForm onSearchResults={handleSearchResults} />
      <ProductList 
          searchResults={searchResults} 
          onEdit={handleEditProduct} 
          onDelete={handleDeleteProduct} 
      />
    </div>
  );
};

export default App;


