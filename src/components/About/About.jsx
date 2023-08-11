import React from 'react'
import './About.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Blog from '../../assets/Blog.png'

const About = () => {
  const About_blog = [
    {id: 1, img: Blog, title: 'Да как так-то борются с пиратством?',
    description: 'Скримеры — только верхушка айсберга ужаса',
    data: '14 Октября 2021'
    },
    {id: 2, img: Blog, title: 'Да как так-то борются с пиратством?',
    description: 'Скримеры — только верхушка айсберга ужаса',
    data: '14 Октября 2021'
    },
    {id: 3, img: Blog, title: 'Да как так-то борются с пиратством?',
    description: 'Скримеры — только верхушка айсберга ужаса',
    data: '14 Октября 2021'
    },
  ]
  return (
    <div className="About">
        <h1>Свежее в блоге</h1>
        {window.innerWidth <= 769 ? (<Swiper 
        slidesPerView={1} spaceBetween={0}
        className="About_main">
            {About_blog.map((item) => (
                <SwiperSlide className="About_main2" key={item.id}>
                    <img src={item.img} alt="Blog" />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.data}</p>
                </SwiperSlide>
            ))}
        </Swiper>) : (
          <div className="About_main">
          {About_blog.map((item) => (
              <div className="About_main2" key={item.id}>
                  <img src={item.img} alt="Blog" />
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.data}</p>
              </div>
          ))}
          </div>
        )
        }
        <button className='Main_button'>Все публикации</button>
    </div>
  )
}

export default About