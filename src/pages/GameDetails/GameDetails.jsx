import React, { useContext, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import './GameDetails.css';
import catalogData from '../../catalogData';

const GameDetails = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const selectedItem = catalogData.find(item => item.id === Number(itemId));

  const getRandomGames = (data, count, excludeIds) => {
    const availableGames = data.filter(item => item.image && item.title && !excludeIds.includes(item.id));

    const randomGames = [];
    while (randomGames.length < count && availableGames.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableGames.length);
      randomGames.push(availableGames.splice(randomIndex, 1)[0]);
    }

    return randomGames;
  };
  const cartItemIds = cart.map(item => item.id);
  const randomGames = getRandomGames(catalogData, 4, [...cartItemIds, Number(itemId)]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleBuyClick = () => {
    setShowModal(true); // Open the modal when the "Купить" button is clicked
  };
  return (
    <div className="GameDetails">
      <div className="GameDetails_main">
        <div className="About_game">
          {selectedItem && selectedItem && (
            <img src={selectedItem.image} alt="image" className='main_img'/>
          )}
        </div>
        <div className="About_words">
        {selectedItem && (
            <>
            {typeof selectedItem.title === 'string' ? (
              <h2>{selectedItem.title}</h2>
              ) : (
              <img
              src={selectedItem.title1}
              style={{width: '276px'}}
              className="item_title" />
              )}
            <p>В наличии</p>
            <div className="content2">
                  <p>{selectedItem.price}</p>
                  <p>{selectedItem.discount}</p>
                  <p>{selectedItem.discount2}</p>
            </div>
            <div className="content_buttons">
              <button onClick={handleBuyClick}>Купить</button>
              <button onClick={() => addToCart(selectedItem, selectedItem.id)}>В корзину</button>
            </div>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <img src={selectedItem.image} alt="image" className="modal-image" />
                  <div className='modal_words'>
                  <h2>Купить онлайн {selectedItem.title}</h2>
                  {window.innerWidth > 460 ? (
                    <p>На нашем сайте вы можете купить {selectedItem.title} дешево по самой выгодной цене. До сих пор ищете где купить аккаунт или ключ {selectedItem.title} на платформе Mojang или других? Тогда вы обратились по адресу!
                    Огромный выбор самых разных и интересных предложений с {selectedItem.title} по самым выгодным ценам!
                    Мы собрали для вас лучшие предложения от продавцов по самым привлекательным и низким ценам. Благодаря тому, что мы торговая площадка, продавцы соревнуются за самую выгодную цену для вас. Ознакомьтесь со всеми предложениями в наличии ниже!</p>
                  ) : (
                    <p>На нашем сайте вы можете купить {selectedItem.title} дешево по самой выгодной цене. До сих пор ищете где купить аккаунт или ключ {selectedItem.title} на платформе Mojang или других? Тогда вы обратились по адресу!
                    Огромный выбор самых разных и интересных предложений с {selectedItem.title} по самым выгодным ценам!</p>
                  )}
                  <div className="buy">
                  <button onClick={() => setShowModal(false)}>Купить</button>
                  <p>{selectedItem.price}Р</p>
                  </div>
                  </div>
                </div>
              </div>
            )}
            <div className="content4">
              <p>Жанр</p>
              <p>Платформа</p>
              <p>Регион активации</p>
              <p>Тип товара</p>
              <p>Гонки</p>
              <p>Steam</p>
              <p>Страны СНГ</p>
              <p>Учетная запись</p>
            </div>
            <div className="content5">
              <p>Моментальная доставка</p>
              <p>Гарантия качества</p>
            </div>
            </>
          )}
        </div>
      </div>
      <div className="GameDetails_main2">
      <h1>Вам будет интересно</h1>
      <div className="random_games">
        {randomGames.map(item => (
          <div key={item.id} className="random-game">
            <Link to={`/GameDetails/${item.id}`} onClick={() => navigate(`/GameDetails/${item.id}`)}>
            <img src={item.image} alt="image" className='Catalog_img'/>
            </Link>
            <div className="content2">
                    <p>{item.price}</p>
                    <p>{item.discount1}</p>
                    <p>{item.discount2}</p>
                  </div>
                  <p className='title'>{item.title}</p>
            <div className="content3">
                    <div className="content_1">
                    <span></span>
                    <p>Ключ</p>
                    </div>
                    <div className="content_1">
                    <span></span>
                    <p>Аккаунт Steam</p>
                    </div>
          </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default GameDetails