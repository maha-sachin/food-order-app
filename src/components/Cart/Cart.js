import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const [isSubmit, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.remove(id);
  };

  const cartItemAddHandler = (item) => {
    // DEMO UseContext consume
    // NOTE addItem will trigger the addItem function in the cart provider component
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    // NOTE calling firebase
    // DEMO firebase
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

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {hasItems && (
        <CheckoutForm
          onConfirmOrder={submitOrderHandler}
          onCancel={props.onCloseCartBtn}
        />
      )}
    </React.Fragment>
  );

  const setIsSubmittingModalContent = <p>sending order data...</p>;
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
    <Modal onCloseModal={props.onCloseCartBtn}>
      {!isSubmit && !didSubmit && cartModalContent}
      {isSubmit && setIsSubmittingModalContent}
      {!isSubmit && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
