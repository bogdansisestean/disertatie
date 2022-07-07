import "./ProcessScreen.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useHistory } from "react-router-dom";

//Actions

import { getProcessDetails } from "../redux/actions/processActions";
import { activateProcess, addToCart } from "../redux/actions/cartActions";

const ProcessScreen = () => {

  const [processActive, setProcessActive] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const processDetails = useSelector((state) => state.getProcessDetails);
  const cart = useSelector((state) => state.cart)
  const { loading, error, process } = processDetails;

  useEffect(() => {
    if (process && params.id !== process._id) {
      dispatch(getProcessDetails(params.id));
    } else {
    }
  }, [dispatch, process, params, processDetails]);

  const processStatusChecker = () => {
    if (cart.cartItems.filter(cartItem =>
      cartItem.processId === params.id
    )?.length > 0) {
      setProcessActive(true)
      console.log("set true")
    } else {
      setProcessActive(false)
    }
  }
  useEffect(() => {
    processStatusChecker()
  }, [cart, processActive, process, params])

  console.log("logchecker", cart.cartItems.filter(cartItem =>
    cartItem.processId === params.id
  )?.length)

  const moveToRobotHandler = () => {
    localStorage.setItem("selectedProcessId", process._id);
    navigate(`/robot/${process.robot._id}`, { state: { process: process } });
  };

  const processActivateHandler = () => {
    setProcessActive(true);
    dispatch(activateProcess(process._id))
    navigate("/active-processes", { replace: true });
  }

  return (
    <div className="processScreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <React.Fragment>
          <div className="processScreen__left">
            <div className="left__image">
              <img src={process.imageUrl} alt={process.Name} />
            </div>
            <div className="left__info">
              <p className="left__name">{process.name}</p>
              <p>{process.description}</p>
            </div>
          </div>
          <div className="processScreen__right">
            <div className="right__info">
              <p>
                Status:
                <span>{processActive ? "Active" : "Offline"}</span>
              </p>
              <p>
                <button type="button" onClick={moveToRobotHandler}>
                  See Process Details
                </button>
              </p>
              {processActive ? <p>
                <button type="button" onClick={processActivateHandler}>
                  See active processes
                </button>
              </p> : <p>
                <button type="button" onClick={processActivateHandler}>
                  Run Process
                </button>
              </p>}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProcessScreen;



