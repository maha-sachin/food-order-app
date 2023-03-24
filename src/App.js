import React, { useState } from "react";
import { lazy, Suspense } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
//import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const Cart = lazy(() => import("./components/Cart/Cart.js"));

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Suspense fallback={<p>Loading...</p>}>
          <Cart onCloseCartBtn={hideCartHandler} />
        </Suspense>
      )}
      <Header onShowCartFromHeader={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
