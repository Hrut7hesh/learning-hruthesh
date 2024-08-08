import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetails from './OrderDetails';
import './AdminPage.css';

const OrderList = ({ orders, onSelectOrder }) => (
  <div className="OrderList">
    <h2>Orders</h2>
    <ul>
      {orders.map(order => (
        <li key={order._id}>
          <div>Order Name: {order.serial}</div>
          <div>Total: ${order.total}</div>
          <button onClick={() => onSelectOrder(order)}>Details</button>
        </li>
      ))}
    </ul>
  </div>
);

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/orders')
      .then(response => {
        setOrders(response.data.orders);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch orders');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="AdminPage">
      {selectedOrder ? (<><OrderList orders={orders} onSelectOrder={setSelectedOrder} /><OrderDetails order={selectedOrder}/> </>) : <OrderList orders={orders} onSelectOrder={setSelectedOrder} />}
    </div>
  );
};

export default AdminPage;
