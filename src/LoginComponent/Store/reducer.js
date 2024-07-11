import { combineReducers } from "redux";

const intialState = {
  user: { email: "default", password: "default123" },
};

const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
