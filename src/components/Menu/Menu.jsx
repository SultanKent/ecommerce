import React, {useContext, useEffect, useState} from 'react';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import Art from '../../assets/Art.png';
import Logo from '../../assets/Logo.png';
import Hamb from '../../assets/Hamb.png';
import Like from '../../assets/Like.png';
import Shop from '../../assets/Shop.png';
import Search from '../../assets/Search.png';
import closeIcon from '../../assets/closeIcon.png';
import Percent from '../../assets/Percent.png';
import Menu_person from '../../assets/Menu_person.png';

const Menu = () => {
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false)
  const openAndCloseMenu = () => {
    setOpenMenu(!openMenu);
    // navigate('/');
  }
  useEffect(() => {
    const body = document.querySelector('body');
    if (openMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [openMenu]);
  return (
    <div className='Menu'>
      <div className="Menu_main Menu_main1">
        <div>RU/$</div>
        <li>Накопительный счет</li>
        <nav className='navbar'>
          <li>Отзывы</li>
          <li>Гарантии</li>
          <li>Как купить</li>
          <li>Накопительная</li>
          <li>Заработай</li>
        </nav>
        <div className="account">
          <p>Hanzed Rules</p>
          <img src={Art} alt=''/>
        </div>
      </div>
      <div className="Menu_main">
        <div className="Main_logo">
        <div className='Logo_text'>
          <Link to='./'>
          <img src={Logo} alt="Logo"/>
          </Link>
          <h2>Playnchill</h2>
        </div>
        {window.innerWidth > 420 ? (
         <img src={Hamb} alt="Hamb" />
         ) : (
         openMenu ? (
        <img src={closeIcon} alt="Close" className='close' onClick={openAndCloseMenu} />
        ) : (
        <img src={Hamb} alt="Hamb" onClick={openAndCloseMenu} />
        )
        )}
        {openMenu && (
          <div className="Menu-overley">
            <div className='Menu_main2'>
            <Link to='./' onClick={openAndCloseMenu}>
            <img src={Logo} alt="Logo" className='Logo_img'/>
            </Link>
            <input type='text' placeholder='Поиск' className='question2'/>
            </div>
            <div className="Menu-content22">
            <div className='Shop2'>
            <img src={Like} alt="Like"/>
            <Link to="/Cart" onClick={openAndCloseMenu}>
            <div className="cart-container">
              <img src={Shop} alt="Shop"/>
              <span className="cart-count">{itemAmount}</span>
            </div>
            </Link>
            <img src={Percent} alt="Percent" />
            <img src={Menu_person} alt="Menu_person" />
            </div>
            </div>
            <div className="Menu-content">
            <div className="Menu-content2">
            <nav className='navbar'>
            <li>Отзывы</li>
            <li>Гарантии</li>
            <li>Накопительная</li>
            <li>Заработай</li>
            </nav>
            <Link to="/Catalog" onClick={openAndCloseMenu}>
            <button className="Main_button2">В каталог</button>
            </Link>
            </div>
            </div>
          </div>
        )}
        </div>
        <input type="text" className='question' placeholder="Введите запрос"/>
        <p style={{color: '#77BE1D'}}>Бесплатно</p>
        <div className='Shop'>
          <img src={Like} alt="Like" className='like'/>
          <Link to="/Cart">
            <div className="cart-container">
              <img src={Shop} alt="Shop"/>
              <span className="cart-count">{itemAmount}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu; 