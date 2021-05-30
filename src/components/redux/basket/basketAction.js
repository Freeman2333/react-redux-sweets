import {
  ADD_TO_BASKET,
  RESET_BASKET,
  ADD_TO_BASKET_ITEM,
  REMOVE_ROW,
} from "./basketlistType";

export const addToBasket = (product) => {
  return {
    type: ADD_TO_BASKET,
    payload: product,
  };
};

export const addToBasketItem = (product) => {
  return {
    type: ADD_TO_BASKET_ITEM,
    payload: product,
  };
};
