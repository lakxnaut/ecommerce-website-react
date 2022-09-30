import React, { Fragment } from 'react'
import Header from './components/header/Header'
import AllProducts from './components/Products/AllProducts'

const App = () => {
  const productsArr = [

    {

      title: 'Colors',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

      title: 'Black and white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

  ]
  return (
    <Fragment>
      <Header />
      <AllProducts allproducts={productsArr} />
    </Fragment>
  )
}

export default App