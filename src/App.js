import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import logo from './mini.jpeg';
import './App.css';
import avatar from './img.jpeg';
import Menu from './menu';
import Contacts from './contacts';
import Offers from './offers';
import Reviews from './reviews';
import Navbar from './components/Navbar';


const Content = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';
  const isContactsPage = location.pathname === '/contacts';
  const isOffersPage = location.pathname === '/offers';
  const isReviewsPage = location.pathname === '/reviews';

  if (isReviewsPage) {
    return null;
  }

  if (isOffersPage) {
    return null;
  }

  if (isContactsPage) {
    return null;
  }

  if (isMenuPage) {
    return null;
  }

  return (
    <div className="content">
      <div className="text-block">
        <h1>Добро пожаловать на сайт нашей кофейни, </h1>
        <p>где каждый день мы радуем своих посетителей разнообразными ароматами и вкусами наших кофе. Наши профессиональные баристы готовят напитки с большим удовольствием и любовью, чтобы каждый глоток приносил вам незабываемые впечатления. Приходите наслаждаться не только нашим кофе, но и приятной атмосферой, дружелюбной обстановкой. Мы рады видеть вас!</p>
      </div>
      <div className="image-block">
        <img src={avatar} alt="Coffee Shop" />
      </div>
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <div className="landing-container">
        <Navbar />
        <Content /> 
        <Routes>

          <Route path='/menu' element={<Menu />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
