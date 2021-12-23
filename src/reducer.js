// actions
import {
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE,
  GET_TOTALS,
  TOOGLE_AMOUNT,
} from "./actions";
//? items
import cartItems from "./cart-items";
//? initial store
const initialStore = { cart: cartItems, total: 0, amount: 0 };

//? reducer - function that is used to update the store
// takes 2 arguments - state, aciion
// state - old state/state before update
// action- what do you want to d/what to update
// return updated or old store
function reducer(state=initialStore, action) {
  switch (action.type) {
    // case DECREASE: {
    //   let tempCart = state.cart.map((item) => {
    //     if (item.id === action.payload.id) {
    //       item = { ...item, amount: item.amount - 1 };
    //     }
    //     return item;
    //   });

    //   return { ...state, cart: tempCart };
    // }

    // case INCREASE: {
    //   let tempCart = state.cart.map((item) => {
    //     if (item.id === action.payload.id) {
    //       item = { ...item, amount: item.amount + 1 };
    //     }
    //     return item;
    //   });

    //   return { ...state, cart: tempCart };
    // }

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

    case GET_TOTALS: {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    }

    case TOOGLE_AMOUNT: {
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.option === "inc") {
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
            }
            if (action.payload.option === "dec") {
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
            }
          }
          return cartItem;
        }),
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
