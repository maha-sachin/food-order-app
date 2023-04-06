import React, { useState } from "react";
import Modal from "./components/UI/Modal";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

import CartProvider from "./store/CartProvider";

//Todo : Lazy loading done here
const Cart = lazy(() => import("./components/Cart/Cart.js"));

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const [isWorkingHours, setIsWorkingHours] = useState(true);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  const hideOfflineModel = () => {
    setIsWorkingHours(true);
  };

  return (
    <CartProvider>
      {isCartShown && (
        <Suspense fallback={<p>Loading...</p>}>
          <Cart onCloseCartBtn={hideCartHandler} />
        </Suspense>
      )}
      {!isWorkingHours && (
        <Modal onCloseModal={hideOfflineModel}>
          <p>We are offline as of now, do enjoy these quotes below</p>
          <p>
            “Part of the secret of success is to eat what you like and let the
            food fight it out inside.”
          </p>
        </Modal>
      )}
      <Header onShowCartFromHeader={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
