import React from 'react';
import './App.css';
import Cap from './cap.png';
import Latte from './latte.png';
import Americano from './americano.png';
import Moca from './moca.png';
import Flats from './flat.png';

const drinks = [
  { name: 'Эспрессо', price: '150', image: Cap },
  { name: 'Американо', price: '170', image: Americano },
  { name: 'Капучино', price: '200', image: Cap},
  { name: 'Латте', price: '210', image: Latte },
  { name: 'Маккиато', price: '180', image: Moca },
  { name: 'Флэт Уайт', price: '190', image: Flats },
];

const Menu = () => {
  return (
    <div className="reviews-container">
      <h2>Меню</h2>
      <div className="reviews-grid">
        {drinks.map((drink, index) => (
          <div key={index} className="review-card">
            <img src={drink.image} alt={drink.name} className="round-image" />
            <h3>{drink.name}</h3>
            <p>{drink.price} руб.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;