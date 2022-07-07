import React from "react";
import "./ActiveProcessesItem.css";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/actions/cartActions";

const ActiveProcessItem = (props) => {

   const removeFromCartHandler = () => {
    props.removeHandler(props.item.processId);
  };
console.log("props.item", props.item.processId)
  return (
    <div className="active__process__item">
      <div className="active__process__item__image">
        <img src={props.item.imageUrl} alt={props.item.name} />
      </div>
      <Link to={`/process/${props.item.processId}`} className="active__process__item__name">
        <p>{props.item.name}</p>
      </Link>
      <Link to={`/process/${props.item.processId}`} className="active__process__item__name">
        <button>See Process</button>
      </Link>
      <button className="active__process__item__deleteBtn" onClick={removeFromCartHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ActiveProcessItem;
