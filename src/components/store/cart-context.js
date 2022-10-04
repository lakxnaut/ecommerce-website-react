import React from "react";

const CartContext = React.createContext({

    item: [],
    total: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    quantity: 0,
    token: '',
    login: (token) => { },
    isLoggedin: false



})

export default CartContext;