import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import Modal from '../UI/Modal'

import classes from './Cart.module.css'

const Cart = (props) => {
    // const cartElements = [

    //     {

    //         title: 'Colors',

    //         price: 100,

    //         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    //         quantity: 2,

    //     },

    //     {

    //         title: 'Black and white Colors',

    //         price: 50,

    //         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    //         quantity: 3,

    //     },

    //     {

    //         title: 'Yellow and Black Colors',

    //         price: 70,

    //         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    //         quantity: 1,

    //     }

    // ]

    const cartctx = useContext(CartContext)
    function showCartHandler() {
        props.onCartClickHandler(false)

    }

    const total = cartctx.item.reduce((acc, curr) => {

        return acc + curr.price
    }, 0)
    console.log(total);
    return (
        <Modal>
            <div className={classes.crossbutton}>
                <button onClick={showCartHandler}>X</button>
            </div>
            <div className={classes.cartname}>CART</div>
            <div className={classes.cartinfo}>
                <p>ITEM</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
            </div>
            {cartctx.item.map(item => {
                return (<div className={classes.cartdetail}>
                    <div className={classes.cartitem}  >
                        <img className={classes.cartimg} src={item.image} alt='' />
                        <div className={classes.carttitle}>{item.title}</div>



                    </div>
                    <div className={classes.cartprice}>{item.price}</div>


                    <div className={classes.cartquantity}>{item.quantity}
                        <button className={classes.removebutton}  >Remove</button>
                    </div>

                </div>)

            })}
            <div className={classes.total}>Total ${total}</div>
        </Modal>
    )
}

export default Cart