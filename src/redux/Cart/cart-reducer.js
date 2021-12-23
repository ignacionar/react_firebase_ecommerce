import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./cart-actions";
import { addItemToCart, removeItemsFromCart } from "./cart-utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case ADD_TO_CART: 
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
          cartItems: removeItemsFromCart(state.cartItems, action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }

    default:
      return state;
  }
};

export default cartReducer;