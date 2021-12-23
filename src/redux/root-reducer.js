import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import userReducer from './User/user-reducer';
import { persistReducer } from 'redux-persist';
import popUpReducer from './Popup/popup-reducer';
import cartReducer from './Cart/cart-reducer';
import ordersReducer from './Orders/order-reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  popUp: popUpReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default persistReducer(persistConfig, rootReducer);
