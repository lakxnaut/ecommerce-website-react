import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

    const initialToken = localStorage.getItem('token')

    const [myItem, setMyItem] = useState([])
    const [token, setToken] = useState(initialToken)


    function addToCartHandler(item) {

        setMyItem([...myItem, item])



    }

    function removeFromCart(id) {

    }

    function loginHandler(token) {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const cartContext = {
        item: myItem,
        total: 0,
        token: token,
        login: loginHandler,
        addItem: addToCartHandler,
        removeItem: removeFromCart,
        isLoggedin: false,
    }
    return (
        <CartContext.Provider value={cartContext}>

            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider