import { ADD_PRODUCT } from "./productlistType";

const initProduct = {
  numberOfProducts: 0,
  productArray: [],
};

const productlistReducer = (state = initProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + 1,
        productArray: [...state.productArray, action.payload],
      };
    default:
      return state;
  }
};

export default productlistReducer;
