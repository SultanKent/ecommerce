import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './Minecraft.css';
import kriper from '../../assets/kriper.png';
import fight from '../../assets/fight.png';

const Minecraft = () => {
  const advertising = [
    {
      id: 1,
      title: 'Играй уже сейчас в Minecraft',
      price: 4999,
      discount: '-25%',
      discount2: 6999,
      img: kriper,
    },
    {
      id: 2,
      title: 'Играй уже сейчас в Minecraft dangerous',
      price: 4999,
      discount: '-25%',
      discount2: 6999,
      img: fight,
    },
  ];

  return (
    <div className="Minecraft">
      <div className="Minecraft_main">
        {window.innerWidth <= 420 ? (
          <Swiper slidesPerView={1} spaceBetween={0}>
            {advertising.map((item) => (
              <SwiperSlide
                key={item.id}
                className={` ${item.id === 1 ? 'adveristing1' : 'adveristing2'}`}
              >
                <div className="adveristing_words">
                  <h1>{item.title}</h1>
                  <div className="content2">
                    <p>{item.price}</p>
                    <p style={{ color: '#FFE817' }}>{item.discount}</p>
                    <p>{item.discount2}</p>
                  </div>
                  <div className="content3">
                    <button style={{ background: 'rgba(255, 255, 255, 0.10)' }}>
                      Купить
                    </button>
                    <button style={{ background: 'transparent' }}>
                      В избранное
                    </button>
                  </div>
                </div>
                <div className="adveristing_img">
                  <img src={item.img} alt="item.img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          advertising.map((item) => (
            <div
              className={item.id === 1 ? 'adveristing1' : 'adveristing2'}
              key={item.id}
            >
              <div className="adveristing_words">
                <h1>{item.title}</h1>
                <div className="content2">
                  <p>{item.price}</p>
                  <p style={{ color: '#FFE817' }}>{item.discount}</p>
                  <p>{item.discount2}</p>
                </div>
                <div className="content3">
                  <button style={{ background: 'rgba(255, 255, 255, 0.10)' }}>
                    Купить
                  </button>
                  <button style={{ background: 'transparent' }}>
                    В избранное
                  </button>
                </div>
              </div>
              <div className="adveristing_img">
                <img src={item.img} alt="item.img" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Minecraft;