import React, { useContext, useRef } from 'react'
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom'
import CartContext from '../store/cart-context';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const Navigate = useNavigate();

    const cartCtx = useContext(CartContext);

    async function onSubmitHandler(e) {
        e.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value

        const resp = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVAE7aUSl9yyrZqGn-MO-JWRkJvemcR3g', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'


            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )

        })

        if (resp.ok) {

            const data = await resp.json()
            const token = data.idToken


            cartCtx.login(token)

            Navigate('/store')

        }
        else {
            const data = await resp.json()
            alert(data.error.message);

        }

    }
    return (
        <div className={classes.contact}>
            <form className={classes.myform} onSubmit={onSubmitHandler}>


                <label>Email</label>
                <input type='email' ref={emailRef} />

                <label>Phone Number</label>
                <input type='password' ref={passwordRef} />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default Login