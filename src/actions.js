export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTAL";
export const TOOGLE_AMOUNT = "TOOGLE_AMOUNT";
export const REMOVE = "REMOVE";

// Action creators
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
