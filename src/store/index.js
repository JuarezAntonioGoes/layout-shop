import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./modules/Cart/reducers";

import thunk from "redux-thunk";

const reducers = combineReducers({ productCart: cartReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
