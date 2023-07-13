import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import './GameDetails.css';
import catalogData from '../../catalogData';

const GameDetails = () => {
  const { itemId } = useParams();
  const { cart, addToCart } = useContext(CartContext);
  const selectedItem = cart.find(item => item.id === Number(itemId));
  return (
    <div className="GameDetails">
      <div className="GameDetails_main">
        <div className="About_game">
          {selectedItem && selectedItem.title && (
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
              <button>Купить</button>
              <button onClick={() => addToCart(selectedItem, selectedItem.id)}>В корзину</button>
            </div>
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
    </div>
  );
};

export default GameDetails