import {
  ADD_TO_BASKET,
  RESET_BASKET,
  ADD_TO_BASKET_ITEM,
  REMOVE_ROW,
} from "./basketlistType";

const initOrder = {
  orderNumber: Math.floor(Math.random() * 100),
  numberOfUnits: 0,
  unitArray: [],
};

const getInitOrder = () => {
  const basket = localStorage.getItem("basket");
  if (basket) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return initOrder;
  }
};

const initState = getInitOrder();
const basketlistReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        numberOfUnits: state.numberOfUnits + 1,
        unitArray: state.unitArray.concat(action.payload),
      };
    case ADD_TO_BASKET_ITEM:
      return {
        ...state,
        numberOfUnits: state.numberOfUnits + 1,
        unitArray: state.unitArray.map((item) =>
          item.SKU === action.payload.SKU ? action.payload : item
        ),
      };
    case REMOVE_ROW:
      let numberOfProducts;
      state.unitArray.forEach((item) => {
        if (item.SKU === action.payload.SKU) {
          numberOfProducts = item.purchasedUnits;
        }
      });
      return {
        ...state,
        unitArray: state.unitArray.filter(item=> item!== action.payload),
        numberOfUnits: state.numberOfUnits - numberOfProducts
      } 
    case RESET_BASKET:
      return {
        ...initOrder
      }
    default:
      return state;
  }
};

export default basketlistReducer;
