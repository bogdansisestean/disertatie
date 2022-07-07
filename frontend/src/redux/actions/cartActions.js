import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const activateProcess = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/processes/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      processId: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const closeProcess = (id) => (dispatch, getState) => {
  console.log("actionsId", id)
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
