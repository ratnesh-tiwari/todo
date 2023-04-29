import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

const Login = props => {
  const [isSignup, setIsSignup] = useState(false);
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [confirmPasswordInput, setConfirmPasswordInput] = useState();
  const { setIsAuthenticated, setLoginBtnClicked } = props;

  const emailChangeHandler = e => {
    setEmailInput(e.target.value);
  };

  const passChangeHandler = e => {
    setPasswordInput(e.target.value);
  };

  const confirmpassChangeHandler = e => {
    setConfirmPasswordInput(e.target.value);
  };

  const onLoginHandler = event => {
    event.preventDefault();
    const email = emailInput.trim();
    const passsword = passwordInput.trim();
    const confirmpassword = confirmPasswordInput;

    if (isSignup) {
      if (!(passsword === confirmpassword)) {
        alert("Your password and confirmon passsword does not match!");
        return;
      }
      createUserWithEmailAndPassword(auth, email, passsword).catch(err =>
        alert(err.message)
      );
      setEmailInput("");
      setPasswordInput("");
      setConfirmPasswordInput("");
      return;
    }

    signInWithEmailAndPassword(auth, email, passsword).catch(err =>
      alert(err.message)
    );
    setEmailInput("");
    setPasswordInput("");
    return;
  };

  const logInShowHandler = () => {
    setLoginBtnClicked(false);
  };

  const signUpShower = event => {
    event.preventDefault();
    setIsSignup(!isSignup);
  };

  const btnName = isSignup ? "Sign Up!" : "Log In!";

  const btnMessage = isSignup
    ? "You already have a account, login now."
    : "Don't have a account, Signup now.";

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      }
    });
  }, [setIsAuthenticated]);

  return (
    <React.Fragment>
      <div onClick={logInShowHandler} className="backdrop"></div>
      <form className="form">
        <ion-icon onClick={logInShowHandler} name="close-outline"></ion-icon>
        <div className="form__center">
          {/* {isSignup && (
            <div className="form__group">
              <input
                ref={nameInput}
                placeholder="Enter your Name"
                className="form__input"
                type="text"
                id="fname"
                name="fname"
              />
              <label className="form__label" htmlFor="fname">
                Enter your Name
              </label>
            </div>
          )} */}
          <div className="form__group">
            <input
              value={emailInput}
              placeholder="Enter your email"
              className="form__input"
              type="email"
              id="email"
              name="email"
              onChange={emailChangeHandler}
            />
            <label className="form__label" htmlFor="email">
              Enter your email
            </label>
          </div>
          <div className="form__group">
            <input
              value={passwordInput}
              className="form__input"
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter your password"
              onChange={passChangeHandler}
            />
            <label className="form__label" htmlFor="pwd">
              Enter your password
            </label>
          </div>
          {isSignup && (
            <div className="form__group">
              <input
                value={confirmPasswordInput}
                className="form__input"
                type="password"
                id="pwd"
                name="pwd"
                placeholder="Confirm your password"
                onChange={confirmpassChangeHandler}
              />
              <label className="form__label" htmlFor="pwd">
                Confirm your password
              </label>
            </div>
          )}
          <div className="form__group center">
            <span onClick={signUpShower} className="form__switch">
              {btnMessage}
            </span>
            <button onClick={onLoginHandler} className="btn form__btn">
              {btnName}
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
