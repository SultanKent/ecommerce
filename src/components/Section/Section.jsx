import React, { useState, useContext } from 'react'
import './Section.css'
import { CartContext } from '../../Contexts/CartContext'
import Top1 from '../../assets/Top1.png'
import Top2 from '../../assets/Top2.png'
import Top3 from '../../assets/Top3.png'
import Top4 from '../../assets/Top4.png'

const Section = () => {
    const { addToCart, handleImageMouseEnter, handleImageMouseLeave, hoveredGame } = useContext(CartContext);
    const Games = [
        {
            id: 4,
            image: Top1,
            price: 16400,
            discount: '-15%',
            discount2: 16400,
            title: 'Shape Of the world'
        },
        {
            id: 5,
            image: Top2,
            price: 16400,
            discount: '-15%',
            discount2: 16400,
            title: 'Minecraft'
        },
        {
            id: 6,
            image: Top3,
            price: 16400,
            discount: '-15%',
            discount2: 16400,
            title: 'Minecraft'
        },
        {
            id: 7,
            image: Top4,
            price: 16400,
            discount: '-15%',
            discount2: 16400,
            title: 'Short Hike'
        },
    ]

    return (
        <div className="Section">
            <h1>Топ 4</h1>
            <div className="Section_main">
                {Games.map((item) => (
                    <div
                        className="Online_Games_main"
                        key={item.id}
                        onMouseEnter={() => handleImageMouseEnter(item.id)}
                        onMouseLeave={handleImageMouseLeave}
                    >
                        <img
                            src={item.image}
                            alt="games"
                        />
                        <div>
                        <div style={{position: 'absolute'}}>
                        {hoveredGame === item.id && (
                            <button onClick={() => addToCart(item, item.id)}
                                className="image-button"
                            >
                                В корзину
                            </button>
                        )}
                        </div>
                        <div className="content2">
                            <p>{item.price}</p>
                            <p>{item.discount}</p>
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

export default Section;