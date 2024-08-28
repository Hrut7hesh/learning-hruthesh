import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const API_BASE_URL = 'http://localhost:3000';

const ProductSearch = ({ onSearchResults }) => {
  const [searchType, setSearchType] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    let url = '';
    switch (searchType) {
      case 'name':
        url = `${API_BASE_URL}/products/name/${searchValue}`;
        break;
      case 'price':
        url = `${API_BASE_URL}/products/price/${searchValue}`;
        break;
      case 'availability':
        url = `${API_BASE_URL}/products/availability/${searchValue}`;
        break;
      default:
        setLoading(false);
        return;
    }

    try {
      const response = await axios.get(url);
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('An error occurred while fetching search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-form-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-type-section">
          <label className="search-label">
            Search By:
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="search-select"
              aria-label="Select search type"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="availability">Availability</option>
            </select>
          </label>
        </div>

        <div className="search-input-section">
          {searchType === 'name' && (
            <input
              type="text"
              placeholder="Enter product name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
              aria-label="Product name"
              required
            />
          )}

          {searchType === 'price' && (
            <input
              type="number"
              placeholder="Enter price"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
              aria-label="Price"
              required
            />
          )}

          {searchType === 'availability' && (
            <select
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-select"
              aria-label="Availability"
            >
              <option value="">All</option>
              <option value="available">Available</option>
              <option value="not available">Not Available</option>
            </select>
          )}
        </div>

        <div className="search-button-section">
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default ProductSearch;
