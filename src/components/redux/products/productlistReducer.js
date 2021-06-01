import {
  ADD_PRODUCT,
  DECREASE_PRODUCT_STOCK,
  RETURN_PRODUCT,
} from "./productlistType";

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
    case DECREASE_PRODUCT_STOCK:
      return {
        ...state,
        productArray: state.productArray.map((item) => {
          if (item.SKU === action.payload.SKU) {
            item.stock -= 1;
            item.purchasedUnits += 1;
            return item;
          } else {
            return item;
          }
        }),
      };
    case RETURN_PRODUCT:
      let updatedProductArray = state.productArray.map((product) => {
        if (product === action.payload) {
          product.stock += action.payload.purchasedUnits;
          product.purchasedUnits -= action.payload.purchasedUnits;
        }
        return product;
      });
      return {
        ...state,
        productArray: updatedProductArray,
      };
    default:
      return state;
  }
};

export default productlistReducer;
