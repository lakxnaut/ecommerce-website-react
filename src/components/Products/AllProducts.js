import React from 'react'
import classes from './AllProducts.module.css'
import Product from './Product'

const AllProducts = (props) => {
    return (
        <div>
            music

            {props.allproducts.map(item => <Product image={item.imageUrl} price={item.price} />)}

        </div>
    )
}

export default AllProducts