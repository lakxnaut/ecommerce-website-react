import React, { Fragment, useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/header/Header'
import AllProducts from './components/Products/AllProducts'
import CartProvider from './components/store/CartProvider'

const App = () => {

  const [isCartShown, setIsCartShown] = useState(false)
  const productsArr = [

    {
      id: 1,

      title: 'Colors',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {
      id: 2,

      title: 'Black and white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {
      id: 3,

      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {
      id: 4,

      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

  ]

  function cartToggle(bool) {
    setIsCartShown(prevValue => !prevValue)
  }
  return (
    <CartProvider>
      {isCartShown && <Cart onCartClickHandler={cartToggle} />}

      <Header onCartClickHandler={cartToggle} />
      <AllProducts allproducts={productsArr} />
    </CartProvider>
  )
}

export default App