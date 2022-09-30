import React from 'react'
import classes from './Product.module.css'

const Product = (props) => {
    return (
        <div>
            <img src={props.image} alt='img' />
            <div>
                {props.price}
                <div>
                    Add to Add
                </div>
            </div>
        </div>
    )
}

export default Product