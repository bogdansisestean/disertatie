import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLogOut } from "../redux/actions/logInUserActions";
import React, { Fragment } from "react";

const NavBar = (props) => {
  const cart = useSelector((state) => state.cart);
  const getUser = useSelector((state) => state.loggedUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = cart;
  const { user, loggedIn } = getUser;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  // const onLoginUserHeandler = () => {
  //   navigate("/login", { replace: true });
  // };
  const onLogOutHandler = () => {
    dispatch(userLogOut());
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/login">
          <h2>{user ? `${user.userName}'s Shopping Cart` : "Not logged in"}</h2>
        </Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart" />
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        {loggedIn ? (
          <li onClick={onLogOutHandler}>
            <a className="log__out__btn">Log Out</a>
          </li>
        ) : (
          <li>
            <Link to="/login">Log In</Link>
          </li>
        )}
      </ul>
      <div className="hamburger__menu" onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
