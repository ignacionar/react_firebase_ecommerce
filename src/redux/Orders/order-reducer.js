import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  START_ORDER,
  PURCHASE_INIT,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
} from './order-actions';

const INITIAL_STATE = {
  orders: [],
  loading: false,
  purchased: false,
  error: null,
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_ORDER:
      return {
        ...state,
        loading: true,
        purchased: false,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: [...state.orders, { ...action.orderData }],
      };
    case CREATE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        purchased: false,
        error: action.error,
      };
    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };

    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [...action.orders],
      };

    default:
      return state;
  }
};

export default ordersReducer;