import { CLICKED_PRODUCT } from "./popup-actions";

const INITIAL_STATE = {
  product: [],
};

const popUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case CLICKED_PRODUCT: 
      return {
        ...state,
        product: [action.clickedProduct]
      }

    default:
      return state;
  }
};

export default popUpReducer;