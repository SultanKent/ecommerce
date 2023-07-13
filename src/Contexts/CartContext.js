import React, { createContext, useEffect, useState} from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)
  const [itemCounts, setItemCounts] = useState({});
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  })
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item
        }  
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
};
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
      if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount - 1}
        } else {return item}
      });
      setCart(newCart)
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [id]: (prevCounts[id] || 0) - 1, // Decrease the count by 1
      }));
    }
      if (cartItem.amount < 2) {
        removeFromCart(id)
      }
  }
  const [hoveredGame, setHoveredGame] = useState(null)

  const handleImageMouseEnter = (id) => {
        setHoveredGame(id)
  }

  const handleImageMouseLeave = () => {
        setHoveredGame(null)
  }
  return (
  <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseAmount,
   decreaseAmount, itemAmount, itemCounts, hoveredGame, handleImageMouseEnter, 
   handleImageMouseLeave}}>
    {children}
  </CartContext.Provider>
  )
};