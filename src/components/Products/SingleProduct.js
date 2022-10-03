import React from 'react'
import classes from './SingleProduct.module.css'

import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'

const SingleProduct = () => {
    return (
        <div className={classes.SingleProduct}>
            <div className={classes.ImagesContainer}>
                <div className={classes.thubmnailContainer}>
                    <div className={classes.thumbnailOne}>
                        <img src={product1} alt='' />

                    </div>
                    <div className={classes.thumbnailOne}>
                        <img src={product2} alt='' />
                    </div>
                    <div className={classes.thumbnailOne}>
                        <img src={product3} alt='' />
                    </div>

                </div>


                <div className={classes.bigImgContainer}>
                    <img src={product1} alt='' />

                </div>
            </div>


            <div className={classes.detailContainer}>
                <div>Title ssdsdsdds sdds </div>
                <div> <span className={classes.price}> ₹ 399</span> <span className={classes.realprice} style={{ textDecoration: 'line-through' }}> ₹ 599</span> </div>

                <div className={classes.reviewContainer}>
                    <h2>Best</h2>
                    <p>best in class bestest best in class bestest best in class bestest best in class bestest best in class bestest best in class bestest best in class bestest best in class bestest best in class bestest best in class bestest </p>
                </div>

            </div>


        </div>
    )
}

export default SingleProduct