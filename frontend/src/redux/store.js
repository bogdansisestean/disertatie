import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducers";
import {
  getProcessesReducer,
  getProcessDetailsReducer
} from "./reducers/processReducers";
import { getUsersReducer } from "./reducers/usersReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  cart: cartReducer,
  getProcesses: getProcessesReducer,
  getProcessDetails: getProcessDetailsReducer,
  getUsers: getUsersReducer,
  loggedUser: userReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : undefined;
const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
  loggedUser: userFromLocalStorage,
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
