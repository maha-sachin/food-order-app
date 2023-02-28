import { useContext, useEffect,useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context'
import React from "react";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton =(props)=>{
    const[btnIsHighLighted,setBtnIsHighLighted]=useState(false)



    const cartCtx =useContext(CartContext)
    
    //object deStructing
    const {items} = cartCtx

    const numberOfCartItems=items.reduce((currentNum,item)=>{
        return currentNum + item.amount;
    },0)


    const buttonClass=`${classes.button} ${btnIsHighLighted ? classes.bump : ''}`
    useEffect(()=>{
        if (items.length === 0){
            return;
            //rest of the function doesn't execute
        }
        setBtnIsHighLighted(true)

// animation: bump 300ms ease-out;settimeout 300
        const timer=setTimeout(()=>{
            setBtnIsHighLighted(false)
        },300)
        // return cleanup function
        return ()=>{
            clearTimeout(timer)

        }

        
    },[items])


    return <button className={buttonClass} onClick={props.onClickHeaderCartBtn}>

        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>

    </button>


}

export default HeaderCartButton