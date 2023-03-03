import { useContext, useState } from "react";
import React from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmit, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    // addItem will trigger the addItem function in the cart provider component
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const showCheckoutHandler = () => {
    setShowCheckout(true);
  };

  //where data should submit to the server
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    // send request to the backend ,send used data and cart data
     await fetch(
      "https://foodorder-7968b-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCartAfterSubmit();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemoveCartItem={cartItemRemoveHandler.bind(null, item.id)}
          onAddCartItem={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseCartBtn}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={showCheckoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <CheckoutForm
          onConfirmOrder={submitOrderHandler}
          onCancel={props.onCloseCartBtn}
        />
      )}

      {!showCheckout && modalActions}
    </React.Fragment>
  );
  // is shown we submit the form
  const setIsSubmittingModalContent = <p>sending oder data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>
        successfully send the order.., we will notify you once the order is
        ready.
      </p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onCloseCartBtn}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    // onCloseModal props from modal.js and forward props.onCloseCartBtn witch is being set from the app.js component
    <Modal onCloseModal={props.onCloseCartBtn}>
      {/* console.log(props.onCloseCartBtn,'hello close') */}
      {/* TODO change below code to make it readable */}
      {!isSubmit && !didSubmit && cartModalContent}
      {isSubmit && setIsSubmittingModalContent}
      {!isSubmit && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
