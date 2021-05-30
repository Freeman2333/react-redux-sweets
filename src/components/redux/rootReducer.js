import { combineReducers } from "redux";
import productlistReducer from "./products/productlistReducer";

const rootReducer = combineReducers({
  productList: productlistReducer,
});
export default rootReducer;
