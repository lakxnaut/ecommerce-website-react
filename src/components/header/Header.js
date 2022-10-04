import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartButton from './CartButton'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <div className={classes.allheader}>
            <div className={classes.header}>
                <div className={classes['header-links']}>
                    <NavLink to="/"><h3>Home</h3></NavLink>
                    <NavLink to="/store"><h3>Store</h3></NavLink>
                    <NavLink to="/about"><h3>About</h3></NavLink>
                    <NavLink to="/contact"><h3>Contact</h3></NavLink>
                    <NavLink to="/store/:productid"><h3>Product</h3></NavLink>
                    <NavLink to="/login"><h3>Login</h3></NavLink>


                </div>

                <CartButton onCartClickHandler={props.onCartClickHandler} />



            </div>
            <div className={classes.generics}>
                <h1 >The Generics

                </h1>
            </div>
        </div>
    )
}

export default Header