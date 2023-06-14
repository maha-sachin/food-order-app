import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //DEMO 1 ADD TO CART - group item for the same meals together and manage the amount per meal prices
  if (action.identifier === "Add-Cart-Item") {
    //check if the item already part of the cart,this will return index of that item if exist
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  //DEMO 1.1 DELETE FROM CART
  if (action.identifier === "Remove-Cart-Item") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      // it returns true all item are kept but one item where is equal === action.id whis is to be removed id for the one item we returned false here,and then we removed that item with the new generated array
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedAmountAfterRemovedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedAmountAfterRemovedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.identifier === "Clear") {
    return defaultCartState;
  }

  return defaultCartState;
};

//goal of this component simply manage the cartContext data and provide that context to all comp that one acces to it
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ identifier: "Add-Cart-Item", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ identifier: "Remove-Cart-Item", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ identifier: "Clear" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    remove: removeItemFromCartHandler,
    clearCartAfterSubmit: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
