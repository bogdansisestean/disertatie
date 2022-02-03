import React, { useEffect, useState } from "react";

//*Router
import { useNavigate } from "react-router-dom";

//*Redux
import { useDispatch, useSelector } from "react-redux";
import { getUsers as listUsers } from "../redux/actions/usersActions";
import { userLogIn } from "../redux/actions/logInUserActions"; //*Name and Email as payloads +street ap city county

//*Styles
import "./LogInScreen.css";

const LogInScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUsers = useSelector((state) => state.getUsers);
  const { loading, error, users } = getUsers;

  const loggedUser = useSelector((state) => state.loggedUser);
  const { loggedIn, user } = loggedUser;

  if (loggedIn) {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  //* user filter
  const findUserByName = users.find((user) => user.name === name);

  const onSubmitHandler = () => {
    dispatch(
      userLogIn(
        findUserByName.name,
        findUserByName.email,
        findUserByName.street,
        findUserByName.ap,
        findUserByName.city,
        findUserByName.county
      )
    );

    //*account validation
    if (
      findUserByName &&
      findUserByName.email === email &&
      findUserByName.password === password
    ) {
      navigate("/", { replace: true });
    }
  };
  if (users) {
    return (
      <div className="login__screen">
        <form
          className="login__form"
          onSubmit={onSubmitHandler}
          autoComplete="on"
        >
          <h1 className="login__heading">Log in to your account</h1>
          <input
            type="name"
            id="input_name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {findUserByName ? (
            <p className="found__warning">User found</p>
          ) : (
            <p className="not__found__warning">Add a valid name</p>
          )}
          <input
            type="email"
            id="input_email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {findUserByName ? (
            findUserByName.email === email ? (
              <p className="found__warning">Email Correct</p>
            ) : (
              <p className="not__found__warning">Email does not match</p>
            )
          ) : (
            <p>Enter an email</p>
          )}
          <input
            type="password"
            id="input_password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {findUserByName ? (
            findUserByName.password === password ? (
              <p className="found__warning">Password Correct</p>
            ) : (
              <p className="not__found__warning">Invalid Password</p>
            )
          ) : (
            <p>Enter a password</p>
          )}
          <a>
            <button type="submit" className="submit__btn">
              Log In
            </button>
          </a>
        </form>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default LogInScreen;
