import * as actionTypes from "../constants/loggedUserConstants";

const USER_INITIAL_STATE = {
  user: {},
  loggedIn: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_LOG_IN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };

    case actionTypes.USER_LOG_OUT:
      return {
        ...state,
        user: undefined,
        loggedIn: false,
      };
    default:
      return state;
  }
};
