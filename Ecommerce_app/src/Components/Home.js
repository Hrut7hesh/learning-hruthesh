// import axios from "axios";
// import React, { useEffect, useState, useCallback } from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProducts = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("http://localhost:3000/api/v1/products");
//       setProducts(response.data.products);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/v1/products/${productId}`);
//       fetchProducts();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <div className="container">
//       <Outlet />
//         <h1>Product List</h1>
//         <div className="product-list">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product._id} className="product-item">
//                 <h2>{product.name}</h2>
//                 <p className="price">${product.price}</p>
//                 <Link to={`/Home/${product._id}`} className="details-link">
//                   Show Details
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(product._id)}
//                   className="delete-button"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>No products available.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import moment from 'moment-timezone';
import 'moment/locale/en-gb';
import './ShowProducts.css'; 

function ShowProducts() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    displayProducts();
  }, []);

  useEffect(() => {
    if (id) {
      viewProductDetails(id);
    }
  }, [id]);

  useEffect(() => {
    filterData(); 
  }, [statusFilter, data]);

  const displayProducts = () => {
    const url = 'http://localhost:3000/api/v1/products';
    axios.get(url)
      .then(response => {
        setData(response.data.products);
      })
      .catch(error => {
        console.error(error);
        alert('Error fetching products.');
      });
  };

  const viewProductDetails = (productId) => {
    axios.get(`http://localhost:3000/api/v1/products/${productId}`)
      .then(response => {
        setSelectedProduct(response.data.product);
        navigate(`/Home/${productId}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deleteData = (productId) => {
    axios.delete(`http://localhost:3000/api/v1/products/${productId}`)
      .then(() => {
        displayProducts();
        setSelectedProduct(null);
        navigate('/Home');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const filterData = () => {
    const filterText = document.getElementById('search-input').value.toLowerCase();
    const filteredItems = data.filter(item =>
      (item.name.toLowerCase().includes(filterText) ||
       item.description.toLowerCase().includes(filterText)) &&
      (statusFilter === 'All' ||
       (statusFilter === 'True' && item.status) ||
       (statusFilter === 'False' && !item.status))
    );
    setFilteredData(filteredItems);
  };

  const handleFilterChange = () => {
    filterData();
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null); 
    navigate('/Home');
  };

  const columns = [
    {
      name: 'Code',
      selector: row => row.code,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status ? 'True' : 'False',
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Stock',
      selector: row => row.stock,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <button onClick={() => viewProductDetails(row._id)}>View Details</button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  return (
    <div className='outer'>
      {selectedProduct ? (
        <div className="product-details">
          <button onClick={handleCloseDetails} className="close-button">Close</button>
          <h1>Product Details</h1>
          <p><b>Code:</b> {selectedProduct.code}</p>
          <p><b>Name:</b> {selectedProduct.name}</p>
          <p><b>Excerpt:</b> {selectedProduct.excerpt}</p>
          <p><b>Description:</b> {selectedProduct.description}</p>
          <p><b>Status:</b> {selectedProduct.status ? 'True' : 'False'}</p>
          <p><b>Price:</b> {selectedProduct.price}</p>
          <p><b>Stock:</b> {selectedProduct.stock}</p>
          <p><b>Created at:</b> {moment(selectedProduct.created_at).tz('Asia/Kolkata').format('Do MMMM YYYY')}</p>
          <button onClick={() => deleteData(selectedProduct._id)}>Delete</button>
        </div>
      ) : (
        <>
          <div className='filters'>
            <div className='filter-controls'>
              <div className='search-bar'>
                <input 
                  id="search-input"
                  type="text" 
                  placeholder="Search products" 
                  onChange={handleFilterChange} 
                />
              </div>
              <div className='status-filter'>
                <label>Status:</label>
                <select onChange={handleStatusChange} value={statusFilter}>
                  <option value="All">All</option>
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select>
              </div>
            </div>
          </div>
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            pointerOnHover
            responsive
          />
        </>
      )}
    </div>
  );
}

export default ShowProducts;





