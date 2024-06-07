// Menu.js
import React from 'react';
import './App.css';


const Offers = () => {
  return (
    <div className="content-offers">
      <h1>Акция будних дней:</h1>
      <div>
        <h2>С 8:00 до 10:00 скидка на кофе 15%! <br/> Наш кофе - Самый лучший старт <br/> Вашего продуктивного дня!
</h2>
      </div>
      <br/>
      <div className="content-offers">
      <h1>Акция выходных дней:
</h1>
      <div>
        <h2>При покупке 2-х чашек кофе - Эспрессо в подарок. <br/> Наша кофейня - отличное место для встречи <br/> Вас с Вашими дузьями!
</h2>
      </div>
    </div>
    </div>
  );
};

export default Offers;