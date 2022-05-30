import * as actionTypes from "../constants/userConstants";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_USERS_REQUEST });

    const { data } = await axios.get("/api/users");

    dispatch({
      type: actionTypes.GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
