import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
//? items
import cartItems from "./cart-items";
//? import reducer
import reducer from "./reducer";
// redux stuff
//? store - stores data, like state
import { createStore } from "redux";
//? react-redux Provider - wraps App - every component wrapeed can acces the store
import { Provider } from "react-redux";

//? initial store
const initialStore = { cart: cartItems, total: 105, amount: 5 };
//? add reducer to store
const store = createStore(reducer, initialStore);
//* redux method that returns the state
// console.log(store.getState());

//! main return
function App() {
  return (
    <main>
      <Provider store={store}>
        <Navbar />
        <CartContainer/>
      </Provider>
    </main>
  );
}

export default App;
