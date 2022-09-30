import React from 'react'
import classes from './CartButton.module.css'

const CartButton = (props) => {

    function showCartHandler() {
        props.onCartClickHandler(true)

    }

    return (
        <div className={classes.cartbutton} >

            <button onClick={showCartHandler} className={classes.button} >
                Cart</button>
            <div className={classes.badge}>
                0
            </div>

        </div>
    )
}

export default CartButton