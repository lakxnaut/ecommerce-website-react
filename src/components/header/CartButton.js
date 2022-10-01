import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import classes from './CartButton.module.css'

const CartButton = (props) => {

    const cartctx = useContext(CartContext)

    function showCartHandler() {
        props.onCartClickHandler(true)

    }

    return (
        <div className={classes.cartbutton} >

            <button onClick={showCartHandler} className={classes.button} >
                Cart</button>
            <div className={classes.badge}>
                {cartctx.item.length}
            </div>

        </div>
    )
}

export default CartButton