import React, { useContext, useState } from 'react';
import './Catalog.css';
import RangeSlider from './RangeSlider';
import catalogData from '../../catalogData'
import { CartContext } from '../../Contexts/CartContext';

const Catalog = () => {
  const { addToCart, handleImageMouseEnter, handleImageMouseLeave, hoveredGame } = useContext(CartContext);
  const type_text = [
    'Аккаунт',
    'Лицинзионный ключ',
    'Активация',
    'Лицинзионный ключ',
    'Активация',
  ];
  const [open, setOpen] = useState({ texts1: true, texts2: true });
  const handleButtonClick = (buttonName) => {
    setOpen((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };
  const [sliders, setSliders] = useState({ isOn: false, isOn2: false, isOn3: false });

  const handleToggle = (sliderName) => {
    setSliders((prevSliders) => ({
      ...prevSliders,
      [sliderName]: !prevSliders[sliderName],
    }));
  };
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCatalogData = catalogData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Catalog">
      <div className="Catalog_main">
        <div className="Catalog_main1">
          <input placeholder="Я ищу.." value={searchQuery} onChange={handleSearch}/>
          <div className="Range">
            <p>Цена p</p>
            <RangeSlider />
          </div>
          <p onClick={() => handleButtonClick('texts1')} style={{ cursor: 'pointer' }}>
            Тип аккаунта
          </p>
          {open.texts1 && (
            type_text.map((item) => (
              <div className="account" key={item.id}>
                <div className="type">
                  <input type="checkbox" />
                  <p>{item}</p>
                </div>
              </div>
            ))
          )}

          <p onClick={() => handleButtonClick('texts2')} style={{ cursor: 'pointer' }}>
            Тип аккаунта
          </p>
          {open.texts2 && (
            type_text.map((item, id) => (
              <div className="account" key={id}>
                <div className="type">
                  <input type="checkbox" />
                  <p>{item}</p>
                </div>
              </div>
            ))
          )}
          <div className="switch_buttons">
            <div className="switch_button1">
              <h2>Новинки</h2>
              <div className={`slider ${sliders.isOn ? 'on' : ''}`} onClick={() => handleToggle('isOn')}>
                <div className="handle" />
              </div>
            </div>
            
            <div className="switch_button1">
              <h2>Хит продаж</h2>
              <div className={`slider ${sliders.isOn2 ? 'on' : ''}`} onClick={() => handleToggle('isOn2')}>
                <div className="handle" />
              </div>
            </div>

            <div className="switch_button1">
              <h2>Только скидки</h2>
              <div className={`slider ${sliders.isOn3 ? 'on' : ''}`} onClick={() => handleToggle('isOn3')}>
                <div className="handle" />
              </div>
            </div>
          </div>

          <p onClick={() => handleButtonClick('texts2')} style={{ cursor: 'pointer' }}>
            Тип аккаунта
          </p>
          {open.texts2 && (
            type_text.map((item, id) => (
              <div className="account" key={id}>
                <div className="type">
                  <input type="checkbox" />
                  <p>{item}</p>
                </div>
              </div>
            ))
          )}

          <p onClick={() => handleButtonClick('texts2')} style={{ cursor: 'pointer' }}>
            Тип аккаунта
          </p>
          {open.texts2 && (
            type_text.map((item, id) => (
              <div className="account" key={id}>
                <div className="type">
                  <input type="checkbox" />
                  <p>{item}</p>
                </div>
              </div>
            ))
          )}

        </div>

        <div className="Catalog_main2">
          <h2>Каталог товаров</h2>
          <div className="catalog_games">
            {filteredCatalogData.length === 0 ? (
              <p>There is no game with this name.</p>
            ) : (
              filteredCatalogData.map((item) => (
                <div
                  className='Online_Games_main'
                  key={item.id}
                  onMouseEnter={() => handleImageMouseEnter(item.id)}
                  onMouseLeave={handleImageMouseLeave}
                >
                  <img src={item.image} alt="" className='Catalog_img'/>
                  <div style={{position: 'absolute'}}>
                    {hoveredGame === item.id && (
                      <button
                        onClick={() => addToCart(item, item.id)}
                        className="image-button"
                      >
                        В корзину
                      </button>
                    )}
                  </div>
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;