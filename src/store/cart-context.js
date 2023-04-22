import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    //NOTE functions to update the context
    addItem:(item)=>{},
    //NOTE id to identify item which removed from the cart
    remove:(id)=>{},
    //NOTEclearCart after order submitting
    clear:()=>{}

})
export default CartContext

