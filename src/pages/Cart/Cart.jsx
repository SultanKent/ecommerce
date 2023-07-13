import React, { useContext, useState } from 'react';
import {CartContext} from '../../Contexts/CartContext'
import './Cart.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Like from '../../assets/Like.png';

const Cart = () => {
  const { cart, increaseAmount, decreaseAmount, itemAmount, removeFromCart, itemCounts } = useContext(CartContext);
  const { itemId } = useParams();
  const navigate = useNavigate();
  return (
    <div className='Cart'>
      <h1>Корзина <span style={{color: '#77BE1D'}}>{itemAmount}</span></h1>
      <div className="Carts">
      <div className='Cart_main1'>
      <div className='LogIn'>
        <div className="meeting">
        <h2>Войдите или зарегистрируйтесь</h2>
        <p>Вы сможете накапливать бонусные рубли
        и использовать их при оплате до 50% стоимости товаров.</p>
        </div>
        <button>Войти</button>
      </div>
      <div className='Products'>
        <ul className='Products_main'>
          {cart.map((item) => (
            <li key={item.id} className="Product">
              <div className="Product_words">
              <Link to={`/GameDetails/${item.id}`} onClick={() => navigate(`/GameDetails/${item.id}`)}>
              <img src={item.image} alt={`Cart ${item.id}`} className="Product_img" />
              </Link>
              <div className='Product_words2'>
              {typeof item.title === 'string' ? (
              <p>{item.title}</p>
              ) : (
              <img src={item.title1} className="item_title" />
              )}
                <div className="content2">
                  <p>$ {item.price * itemCounts[item.id]}</p>
                  <p>{item.discount}</p>
                  <p style={{opacity: 0.20000000298023224}}
                  >$ {item.discount2 * itemCounts[item.id]}</p>
                </div>
                {window.innerWidth > 420 ? ( <p style={{marginBottom: '10px'}}><span style={{opacity: 0.20000000298023224}}>Регион активации </span> Россия и страны СНГ</p>) : (
                  <p style={{marginBottom: '10px'}}><span style={{opacity: 0.20000000298023224}}>Регион </span> Россия </p>
                )}
                {window.innerWidth > 420 ? (<p><span style={{opacity: 0.20000000298023224}}>Сервис активации</span> Steam</p>) : (
                  <p><span style={{opacity: 0.20000000298023224}}>Сервис</span> Steam</p>
                )}
              </div>
              </div>
              <div className="Product_items">
              <button onClick={() => removeFromCart(item.id)}
                style={{background: 'transparent', color: 'gray', height: '0px'}}>X</button>
                <div className='add_product'>
                  <div onClick={() => increaseAmount(item.id)}>+</div>
                  {itemCounts[item.id] || 0}
                  <div onClick={() => decreaseAmount(item.id)}>-</div>
                </div>
                <img src={Like} alt="like" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="Cart_main2">
      <div className="offer">
        <p>5 товаров</p>
        <h1>4 999 Р</h1>
        <button className='order'>Оформить заказ</button>
        <p>Покупая данный товар, я подтверждаю,что ознакомился и согласен с условиями и условия магазина</p>
      </div>
      <div className="offer2">
        <p><span style={{color: '#77BE1D'}}>%</span> Если у вас есть купон на скидку, Вы сможете ввести его на следующем этапе</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cart;