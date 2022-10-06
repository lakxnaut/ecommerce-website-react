import React, { useEffect, useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {


    const initialToken = localStorage.getItem('token')
    const initialEndPoint = localStorage.getItem('endpoint')

    const [myItem, setMyItem] = useState([])
    const [endPoint, setEndPoint] = useState(initialEndPoint)
    const [token, setToken] = useState(initialToken)
    const userLoggedIn = !!token
    const crudcrud = `https://crudcrud.com/api/eb936023943547cb9a628acf356ac7c7${endPoint}`
    async function showfromCrud() {

        const resp = await fetch(crudcrud, {

            headers: {
                'Content-Type': 'application/json'
            },

        })

        const data = await resp.json()


        setMyItem(data)

    }




    async function addToCartHandler(item) {

        // const inCartAlready = myItem.some(obj =>


        //     (obj.id === item.id)

        // )



        // if (inCartAlready) {
        //     console.log(true);

        // }
        // else {
        //     console.log(false);

        // }


        // if (myItem.some(itm => itm.id === item.id)) {


        //     const resp = await fetch(crudcrud, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(
        //             item

        //         )
        //     })

        //     const data = await resp.json();

        //     setMyItem([...myItem, data])


        // }





        const resp = await fetch(crudcrud, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                item

            )
        })

        const data = await resp.json();

        setMyItem([...myItem, data])










    }

    async function removeFromCart(id) {


        const resp = await fetch(`${crudcrud}/${id}`, {
            method: 'DELETE',


        })

        console.log(resp);
        // const data = await resp.json();



        // setMyItem([...myItem, data])


        // setMyItem(cartItems)
        showfromCrud()



    }

    function loginHandler(token, end) {
        console.log(end);
        setToken(token);
        setEndPoint(end)









        localStorage.setItem('token', token)
        localStorage.setItem('endpoint', end)


    }

    const cartContext = {
        item: myItem,
        total: 0,
        token: token,
        login: loginHandler,
        addItem: addToCartHandler,
        removeItem: removeFromCart,
        showItem: showfromCrud,
        isLoggedin: userLoggedIn,
        endPoint: endPoint
    }
    return (
        <CartContext.Provider value={cartContext}>

            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider