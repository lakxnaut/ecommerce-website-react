import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import classes from './Product.module.css'

const Product = (props) => {

    const cartctx = useContext(CartContext);


    function addCardHandler() {

        cartctx.addItem({ id: props.id, image: props.image, title: props.title, price: props.price, quantity: 1 })


    }
    return (
        <div className={classes.product}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.image}>
                <img src={props.image} alt='img' />
            </div>
            <div className={classes['price-addcart']}>
                {`$${props.price}`}
                <button onClick={addCardHandler} className={classes.button}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product