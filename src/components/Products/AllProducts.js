import React from 'react'
import classes from './AllProducts.module.css'
import Product from './Product'

const AllProducts = (props) => {
    return (
        <div className={classes.allproducts}>
            <div className={classes.title}>MUSIC</div>
            <div className={classes.productcontainer}>

                {props.allproducts.map(item => <Product key={item.id} id={item.id} image={item.imageUrl} title={item.title} price={item.price} />)}
            </div>
            <div className={classes.bottomcartbtn}>
                <button >See the Cart</button>
            </div>

        </div>
    )
}

export default AllProducts