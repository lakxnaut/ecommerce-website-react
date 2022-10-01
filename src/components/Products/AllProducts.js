import React from 'react'
import classes from './AllProducts.module.css'
import Product from './Product'

const AllProducts = (props) => {
    function showCartHandler() {
        props.onCartClickHandler(true)

    }
    return (
        <div className={classes.allproducts}>
            <div className={classes.title}>MUSIC</div>
            <div className={classes.productcontainer}>

                {props.allproducts.map(item => <Product key={item.id} id={item.id} image={item.imageUrl} title={item.title} price={item.price} />)}
            </div>
            <div className={classes.bottomcartbtn}>
                <button onClick={showCartHandler} >See the Cart</button>
            </div>

        </div>
    )
}

export default AllProducts