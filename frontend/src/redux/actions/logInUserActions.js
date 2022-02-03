import * as actionTypes from "../constants/loggedUserConstants";

export const userLogIn = (name, email, street, apartment, city,county) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.USER_LOG_IN,
    payload: {
      userName: name,
      email: email,
      shippingAdress: {
        street: street,
        ap: apartment,
        city: city,
        county: county,
      },
    },
  });
  localStorage.setItem("user", JSON.stringify(getState().loggedUser));
};

export const userLogOut = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.USER_LOG_OUT,
    payload: {
      userName: undefined,
      email: undefined,
    },
  });

  localStorage.setItem("user", JSON.stringify(getState().loggedUser));
};
