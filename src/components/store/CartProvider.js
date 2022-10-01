import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

    const [myItem, setMyItem] = useState([])


    function addToCartHandler(item) {

        setMyItem([...myItem, item])

        // cartContext.item.map(product => {

        //     if (product.id === item.id) {


        //         return (setMyItem([...myItem, { quantity: product.quantity++ }]))





        //     }
        //     return (setMyItem([...myItem, item]))

        // })



    }

    function removeFromCart(id) {

    }

    const cartContext = {
        item: myItem,
        total: 0,

        addItem: addToCartHandler,
        removeItem: removeFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>

            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider