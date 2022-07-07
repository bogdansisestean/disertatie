import React from "react";

//*Router
import { Link } from "react-router-dom";

//*Components
import ActiveProcessItem from "../components/ActiveProcessesItem";

//*Redux
import { useSelector, useDispatch } from "react-redux";
import { activateProcess, closeProcess } from "../redux/actions/cartActions";

//*Styles
import "./ActiveProcesses.css";

const ActiveProcesses = () => {
  const dispatch = useDispatch(); //*dispatch shortcut

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeHandler = (id) => {
    console.log("dispatched id", id)
    dispatch(closeProcess(id));
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="active__processes">
      <div className="active__processes__left">
        <h2>Active Processes</h2>
        {cartItems.length === 0 ? (
          <div>
            There are no processes active <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <ActiveProcessItem
              key={item.processId}
              item={item}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ActiveProcesses;
