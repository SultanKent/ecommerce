import React, { useContext } from 'react';
import './Header.css';
import Menu from '../../components/Menu/Menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Header1 from '../../assets/Header1.png';
import Header2 from '../../assets/Header2.png';
import Header3 from '../../assets/Header3.png';
import title_img from '../../assets/Header_title.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import Section from '../../components/Section/Section';
import Minecraft from '../../components/Minecraft/Minecraft';
import Games from '../../components/Games/Games';
import Discounts from '../../components/Discounts/Discounts';
import CocaCola from '../../assets/CocaCola.png';
import About from '../../components/About/About';
import Review from '../../components/Review/Review';

const Header = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const imgs = [
    {
      id: 1,
      image: Header1,
      title1: title_img,
      description: "Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!",
      price: 7999,
      discount: '-25%',
      discount2: 9999,
    },
    {
      id: 2,
      image: Header2,
      title1: title_img,
      description: "Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!",
      price: 4999 ,
      discount: '-25%',
      discount2: 6999,
    },
    {
      id: 3,
      image: Header3,
      title1: title_img,
      description: "Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!",
      price: 3999,
      discount: '-25%',
      discount2: 5999,
    },
  ];
  return (
    <div className="Header">
      <div className="Header_main">
        <Swiper scrollbar={{ hide: true }} className="mySwiper" autoplay={{ delay: 3000 }}>
          {imgs.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt={`Header ${index + 1}`} className="Header_img" />
              <div className="slide-content">
              <div className="content1">
                  <img src={item.title1} alt="Title" className='Logo'/>
                  <p>{item.description}</p>
                </div>
                <div className="content2">
                  <p>{item.price}</p>
                  <p>{item.discount}</p>
                  <p>{item.discount2}</p>
                </div>
                <div className="content3">
                  <button onClick={() => addToCart(item, item.id)}>В корзину</button>
                  <button>В избранное</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Section/>
        <Minecraft/>
        <Games/>
        <Discounts/>
        <img src={CocaCola} alt="Cookie" className='cookie'/>
        <About/>
        <Review/>
      </div>
    </div>
  );
};

export default Header;