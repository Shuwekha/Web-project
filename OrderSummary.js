import React from 'react';

const OrderSummary = ({ orders }) => {
  return (
    <div className="order-summary">
      <h2>Your Orders</h2>
      <ul>
        {orders.length === 0 ? (
          <li>No orders placed yet.</li>
        ) : (
          orders.map((order, index) => (
            <li key={index}>
              {order.name} - ${order.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default OrderSummary;
