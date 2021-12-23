import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

//? import reducer
import reducer from "./reducer";
// redux stuff
//? store - stores data, like state
// import { createStore } from "redux";
//? react-redux Provider - wraps App - every component wrapeed can acces the store
import { Provider } from "react-redux";

//? add reducer to store
// const store = createStore(reducer);
//* redux method that returns the state
// console.log(store.getState());

//! main return
function App() {
  return (
    <main>
      
        <Navbar />
        <CartContainer/>
   
    </main>
  );
}

export default App;
