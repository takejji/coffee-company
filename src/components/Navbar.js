import React from 'react';
import { Link } from 'react-router-dom';
import logo from './mini.jpeg';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="logo"/>
      <ul className="menu">
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/menu'>Меню</Link></li>
        <li><Link to='/offers'>Акции</Link></li>
        <li><Link to='/reviews'>Отзывы</Link></li>
        <li><Link to='/contacts'>Где нас найти</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;