import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import CakeTable from './components/CakeTable';
import OrderSummary from './components/OrderSummary';
import './components/Styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleRegister = (username, password) => {
    setUser({ username, password });
  };

  const handleOrder = (cake) => {
    setOrders([...orders, cake]);
  };

  return (
    <div className="app-container">
      <h1>Online Cake Shop</h1>
      {!user ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <div>
          <h2>Welcome, {user.username}</h2>
          <CakeTable onOrder={handleOrder} />
          <OrderSummary orders={orders} />
        </div>
      )}
    </div>
  );
};

export default App;
