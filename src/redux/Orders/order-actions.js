import { createOrderDocument, getOrders } from '../../firebase/firebase-util';
import { v4 as uuidv4 } from 'uuid';

export const START_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCES';
export const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL';
export const PURCHASE_INIT = 'PURCHASE_INIT';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';
export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';

export const createOrderSuccess = (orderData) => {
  return {
    type: CREATE_ORDER_SUCCESS,
    orderData: orderData,
  };
};

export const createOrderFail = (error) => {
  return {
    type: CREATE_ORDER_FAIL,
    error: error,
  };
};

export const createOrderStart = () => {
  return {
    type: START_ORDER,
  };
};

export const createOrder = (orderData) => {
  return async (dispatch) => {
    dispatch(createOrderStart());
    try {
      const orderRef = await createOrderDocument({
        id: uuidv4(),
        ...orderData,
      });

      orderRef.onSnapshot((snapShot) => {
        dispatch(createOrderSuccess({ id: snapShot.id, ...snapShot.data() }));
      });
    } catch (error) {
      dispatch(createOrderFail(error));
    }
  };
};

export const purchaseInit = () => ({
  type: PURCHASE_INIT,
});

export const fetchOrderSuccess = (orders) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrderFail = (error) => {
  return {
    type: FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrderStart = () => {
  return {
    type: FETCH_ORDERS_START,
  };
};

export const fetchOrders = (userId) => {
  return async (dispatch) => {
    dispatch(fetchOrderStart());
    try {
      const fetchedOrders = await getOrders(userId);
      dispatch(fetchOrderSuccess(fetchedOrders));
    } catch (err) {
      dispatch(fetchOrderFail(err));
    }
  };
};