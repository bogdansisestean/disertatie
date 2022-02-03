import React, { useRef } from "react";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const nameValueRef = useRef();
  const emailValueRef = useRef();
  const passwordRef = useRef();
  const validatePasswordRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    nameValueRef.current.focus();
    emailValueRef.current.focus();
    passwordRef.current.focus();
    validatePasswordRef.current.focus();

    console.log("name", nameValueRef.current.value);
    console.log("email", emailValueRef.current.value);
    console.log("password", passwordRef.current.value);
    console.log("validate", validatePasswordRef.current.value);
  };

  return (
    <div>
      <h2>SignUp Screen</h2>
      <form onSubmit={formSubmitHandler}>
        <input ref={nameValueRef} type="text" className="input__styling" />
        <input ref={emailValueRef} type="email" className="input__styling" />
        <input ref={passwordRef} type="password" className="input__styling" />
        <input
          ref={validatePasswordRef}
          type="password"
          className="input__styling"
        />
        <button type="submit" className="button__submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpScreen;
