import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    //functions to update the context
    addItem:(item)=>{},
    //id to identify item which removed from the cart
    remove:(id)=>{},
    //clearCart after order submitting
    clear:()=>{}

})
export default CartContext

