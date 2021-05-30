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

const basketlistReducer = (state = initOrder, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        numberOfUnits: state.numberOfUnits + action.bought,
        unitArray: state.unitArray.concat(action.payload),
      };
    default:
      return state;
  }
};

export default basketlistReducer;
