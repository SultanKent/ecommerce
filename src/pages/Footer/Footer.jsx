import React from 'react'
import './Footer.css'
import PayPal from '../../assets/PayPal.png'
import WebMoney from '../../assets/WebMoney.png'
import World from '../../assets/World.png'
import Visa from '../../assets/Visa.png'
import Circles from '../../assets/Circles.png'
import Subtract from '../../assets/Subtract.png'
import Google_Safe from '../../assets/Google_Safe.png'
import Vk from '../../assets/Vk.png'
import Discord from '../../assets/Discord.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'


const Footer = () => {
  const carts = [PayPal, Circles, Visa, World, WebMoney, PayPal, PayPal]
  const messengers = [Vk, Discord, Twitter, Instagram]
  const About = ['О компании', 'О нас', 'Вакансии', 'Реквизиты']
  const About2 = ['Договор оферты', 'Каталог', 'Акции', 'Личный кабинет']
  return (
    <div className="Footer">
        <div className="Footers">
        <div className="Footer_main">
            <div className="Banks">
                {carts.map((item) => (
                    <img src={item} alt="item.carts" />
                ))}
            </div>
        </div>
        <div className="Footer_main2">
            <div className="Footer_texts1">
            {About.map((item) => (
                <div className="Footer_text" key={item.id}>
                <li>{item}</li>
                </div>
            ))}
            </div>
            <div className="Footer_texts2">
            {About.map((item) => (
                <div className="Footer_text">
                <li key={item.id}>{item}</li>
                </div>
            ))}
            </div>
            <div className="Footer_texts2">
            {About.map((item) => (
                <div className="Footer_text">
                <li key={item.id}>{item}</li>
                </div>
            ))}
            </div>
            <div className="Carts1">
                <div className="Cart1">
                    <img src={Subtract} alt="Subtract" />
                    <p>verified<br/> WebMoney</p>
                </div>
                <div className="Cart1">
                    <img src={Google_Safe} alt="Subtract" />
                    <p>verified<br/> WebMoney</p>
                </div>
            </div>
        </div>
        <p className='Footer_down_text'>Все продаваемые ключи закупаются у официальных дистрибьюторови издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza</p>
    </div>
    <div className="Footers2">
        <div className="Footer_down1">
        <p style={{color: '#4277FF'}}>Правовая информация</p>
        <p className='Footers2_p_text'>Интернет-магазин игр «Playnchill» © 2022 </p>
        </div>
        <div className="Footer_down2">
        <p>RU/$</p>
        <div className="messenger">
            {messengers.map((item) => (
                <img src={item} alt="item" />
            ))}
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer