import React, { useRef } from 'react'
import classes from './Contact.module.css'

const Contact = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();


    async function onSubmitHandler(e) {
        e.preventDefault();

        // console.log(nameRef.current.value);
        const userData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        }

        const resp = await fetch('https://react-movie-2787c-default-rtdb.firebaseio.com/contact.json', {
            method: 'POST',
            body: JSON.stringify(userData)
        })
        const data = JSON.stringify(resp);
        console.log(data);

        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";

    }

    return (
        <div className={classes.contact}>
            <form className={classes.myform} onSubmit={onSubmitHandler}>
                <label>Name</label>
                <input type='text' ref={nameRef} />

                <label>Email</label>
                <input type='email' ref={emailRef} />

                <label>Phone Number</label>
                <input type='number' ref={phoneRef} />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default Contact