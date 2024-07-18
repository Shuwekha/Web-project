import React from 'react';

const cakes = [
  { id: 1, name: 'Chocolate Cake', price: 20 },
  { id: 2, name: 'Vanilla Cake', price: 15 },
  { id: 3, name: 'Red Velvet Cake', price: 25 },
  { id: 4, name: 'Cheesecake', price: 30 },
  { id: 5, name: 'Fruit Cake', price: 18 },
  { id: 6, name: 'Lemon Cake', price: 22 },
  { id: 7, name: 'Carrot Cake', price: 24 },
  { id: 8, name: 'Pineapple Cake', price: 20 },
];

const CakeTable = ({ onOrder }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cake</th>
          <th>Price</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        {cakes.map(cake => (
          <tr key={cake.id}>
            <td>{cake.name}</td>
            <td>${cake.price}</td>
            <td>
              <button onClick={() => onOrder(cake)}>Order</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CakeTable;
