import "./ProductScreen.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useHistory } from "react-router-dom";

//Actions

import { getProcessDetails } from "../redux/actions/processActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  console.log(navigate);

  const processDetails = useSelector((state) => state.getProcessDetails);
  const { loading, error, process } = processDetails;
console.log({process})
  useEffect(() => {
    if (process && params.id !== process._id) {
      dispatch(getProcessDetails(params.id));
    } else {
    }
  }, [dispatch, process, params, processDetails]);

  const priceChangeHandler = (e) => setQty(e.target.value);

  const moveToAnalyticsHandler = () => {
    localStorage.setItem("selectedProcessId", process._id);
    navigate(`/robot/${process.robot._id}`);

  };

  // const addToCartHandler = () => {
  //   dispatch(addToCart(process._id, qty));
  //   navigate("/cart", { replace: true });
  // };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <React.Fragment>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={process.imageUrl} alt={process.Name} />
            </div>
            <div className="left__info">
              <p className="left__name">{process.name}</p>
              <p>Active: {process.price}</p>
              <p>{process.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Active: <span>${process.price}</span>
              </p>
              <p>
                Status:
                <span>{process.active ? "Active" : "Offline"}</span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={priceChangeHandler}>
                  {[...Array(process.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={moveToAnalyticsHandler}>
                  See process details
                </button>
              </p>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductScreen;
