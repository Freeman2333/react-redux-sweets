import { ADD_PRODUCT, DECREASE_PRODUCT_STOCK, RETURN_PRODUCT,RESET_PRODUCTS } from "./productlistType";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const decreaseProductStock = (decreasedList) => {
  return {
    type: DECREASE_PRODUCT_STOCK,
    payload: decreasedList,
  };
};

export const returnProduct = (product) => {
  return {
    type: RETURN_PRODUCT,
    payload: product,
  };
};

export const resetProducts = ()=>{
  return {
    type: RESET_PRODUCTS
  }
}
