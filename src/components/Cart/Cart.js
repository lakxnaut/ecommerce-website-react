import React from 'react'
import Modal from '../UI/Modal'

import classes from './Cart.module.css'

const Cart = () => {
    const cartElements = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

            quantity: 2,

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

            quantity: 3,

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

            quantity: 1,

        }

    ]
    return (
        <Modal>
            <div className={classes.crossbutton}>X</div>
            <div className={classes.cartname}>CART</div>
            <div className={classes.cartinfo}>
                <p>ITEM</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
            </div>
            {cartElements.map(item => {
                return (<div className={classes.cartdetail}>
                    <div className={classes.cartitem}  >
                        <img className={classes.cartimg} src={item.imageUrl} alt='' />
                        <div className={classes.carttitle}>{item.title}</div>



                    </div>
                    <div className={classes.cartprice}>{item.price}</div>


                    <div className={classes.cartquantity}>{item.quantity}
                        <button  >Remove</button>
                    </div>

                </div>)

            })}
        </Modal>
    )
}

export default Cart