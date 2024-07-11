import { applyMiddleware, createStore } from "redux";
import loginReducer from "./reducer";
import { thunk } from "redux-thunk";

const store = createStore(loginReducer, applyMiddleware(thunk));

export default store;
