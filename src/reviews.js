import React from 'react';
import avatar from './avatar.png'

const reviewsData = [
  {
    id: 1,
    name: 'Иван Иванов:',
    review:
      'CoffeDon - моё любимое место для встреч с друзьями. Вкусный кофе, дружелюбная атмосфера и отличное место для работы. Рекомендую всем!',
    image: avatar,
  },
  {
    id: 2,
    name: 'Михаил Сидоров',
    review:
      'Кофейня предлагает разнообразный ассортимент кофе которое позволяет вам насладиться каждым визитом. Рекомендую всем!',
    image: avatar,
  },
  {
    id: 3,
    name: 'Сергей Кузнецов',
    review:
      'Мне понравилось всё в этой кофейне - от вкусного кофе до дружелюбного персонала. Рекомендую всем, кто любит хороший кофе!',
    image: avatar,
  },
  {
    id: 4,
    name: 'Анастасия Печкина',
    review:
      'Эта кофейня стала моим любимым местом для работы. Вкусный кофе, быстрый Wi-Fi и комфортная обстановка. Очень рекомендую!',
    image: avatar,
  },
  {
    id: 5,
    name: 'Мария Васильева',
    review:
      'Мне очень понравилось, что в кофейне предлагают разнообразные сорта кофе. Регулярно прихожу сюда на встречи с друзьями!',
    image: avatar,
  },

];


const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>Отзывы</h2>
      <div className="reviews-grid">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} className="round-image" />
            <h3>{review.name}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;