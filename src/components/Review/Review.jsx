import React from 'react'
import './Review.css'
import Logo from '../../assets/Review_logo.png'
import stars from '../../assets/5stars.png'
import Review_png from '../../assets/Review.png'

const Review = () => {
  const Comments = [
    {id: 1,
     img: stars,
     title: 'Cheap keys exist',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam',
     nick: 'eLitee',
     stars: 'Showing out 4 & 5 stars reviews'
     },
     {id: 2,
     img: stars,
     title: 'Cheap keys exist',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam',
     nick: 'eLitee',
     stars: 'Showing out 4 & 5 stars reviews'
     },
     {id: 3,
     img: stars,
     title: 'Cheap keys exist',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam',
     nick: 'eLitee',
     stars: 'Showing out 4 & 5 stars reviews'
     },
  ]
  return (
    <div className="Review">
        <h1>Отзывы</h1>
        <div className="Review_main">
        {window.innerWidth > 460 ? (
          <>
            <div className="Review1">
            <h2>Excellent</h2>
            <img src={stars} alt="5stars" />
            <p>Based on 25,806 reviews</p>
            <img src={Logo} alt="logo" />
            </div>
            <div className="Review_main2">
            {Comments.map((item) => (
                <div className="Review2" key={item.id}>
                <img src={stars} alt="stars" />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.nick}</p>
                <p>{item.stars}</p>
                </div>
            ))}
        </div>
        </>
        ) : (
          <div className="last_reviews">
            <p style={{color: '#366EDC', fontSize: '18px', marginBottom: '20px'}}>Посмотреть все</p>
            <div className='last_review'>
              <img src={Review_png} alt="review_png" />
              <p style={{color: '#B1B1B1', fontSize: '16px'}}>Bionic Commando: Rearmed - ключ Steam</p>
              <p style={{color: '#77BE1D', fontSize: '20px'}}>Положительный</p>
              <div className="about_last_review">
              <p>Ключ купил. Хороший сайт, всем рекомендую!</p>
              <p style={{color: '#747474', fontSize: '14px'}}>28.08.2021</p>
              </div>
            </div>
          </div>
          )}
        </div>
    </div>
  )
}

export default Review