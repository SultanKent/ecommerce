import React from 'react'
import './Discounts.css'
import Discounts1 from '../../assets/Discounts1.png'
import Discounts2 from '../../assets/Discounts2.png'
import Discounts3 from '../../assets/Discounts3.png'
import Discounts4 from '../../assets/Discounts4.png'
import catalogData from '../../catalogData'

const Discounts = () => {
  const Img_games = [
    {image: Discounts1,
    price: 16400,
    discount1: '15%',
    discount2: 16400,
    title: 'Minecraft',
    },
        {
        image: Discounts2,
        price: 16400,
        discount1: '15%',
        discount2: 16400,
        title: 'Minecraft',
        },
        {image: Discounts3,
            price: 16400,
            discount1: '15%',
            discount2: 16400,
            title: 'Minecraft',
        },
        {image: Discounts4,
            price: 16400,
            discount1: '15%',
            discount2: 16400,
            title: 'Minecraft',
        },
  ]
  return (
    <div className="Discounts">
        <h1>Акции и скидки  %</h1>
        <div className="Discounts_main">
            {Img_games.map((item) => (
                <div className='Online_Games_main' key={item.id}>
                <img src={item.image} alt="Img_game" />
                <div>
            <div className="content2">
                <p>{item.price}</p>
                <p>{item.discount1}</p>
                <p>{item.discount2}</p>
            </div>
                <p className='title'>{item.title}</p>
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
    </div>
  )
}

export default Discounts