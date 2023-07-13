import React, { useContext } from 'react';
import './Games.css';
import catalogData from '../../catalogData';
import { CartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';

const Games = () => {
  const { addToCart, handleImageMouseEnter, handleImageMouseLeave, hoveredGame } = useContext(CartContext);

  // Determine the number of images to display based on the width
  const isWidth420 = window.innerWidth === 420;
  const numImagesToDisplay = isWidth420 ? 6 : 12;

  // Filter catalogData to get the desired number of items
  const limitedCatalogData = catalogData.slice(0, numImagesToDisplay);

  return (
    <div className="Games">
      <div className="Games_title">
        <ul>
          <li>Новинки</li>
          <li>Аккаунты</li>
          <li>Ключи</li>
          <li>Активация</li>
          <li>Прокачка</li>
        </ul>
        <div></div>
      </div>
      <div className="Game_main">
        {limitedCatalogData.map((item) => (
          <div
            className="Online_Games_main"
            key={item.id}
            onMouseEnter={() => handleImageMouseEnter(item.id)}
            onMouseLeave={handleImageMouseLeave}
          >
            <img src={item.image} alt="item.imgs" />
            <div>
              <div style={{ position: 'absolute' }}>
                {hoveredGame === item.id && (
                  <button onClick={() => addToCart(item, item.id)} className="image-button">
                    В корзину
                  </button>
                )}
              </div>
              <div className="content2">
                <p>{item.price}</p>
                <p>{item.discount1}</p>
                <p>{item.discount2}</p>
              </div>
              <p className="title">{item.title}</p>
              <div className="content3">
                <span></span>
                <p>Ключ</p>
                <span></span>
                <p>Аккаунт Steam</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/Catalog">
        <button className="Main_button">Перейти в каталог</button>
      </Link>
    </div>
  );
};

export default Games;