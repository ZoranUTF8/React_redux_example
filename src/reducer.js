// actions
import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";

//? reducer - function that is used to update the store
// takes 2 arguments - state, aciion
// state - old state/state before update
// action- what do you want to d/what to update
// return updated or old store
function reducer(state, action) {
  switch (action.type) {
    case DECREASE: {
      let tempCart = [];

      if (action.payload.amount === 1) {
        tempCart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount - 1 };
          }
          return item;
        });
      }

      return { ...state, cart: tempCart };
    }

    case INCREASE: {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      return { ...state, cart: tempCart };
    }

    case CLEAR_CART: {
      return { ...state, cart: [] };
    }

    case REMOVE: {
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
