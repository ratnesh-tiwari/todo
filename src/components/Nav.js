import React from "react";

const Nav = props => {
  const logInShowHandler = () => {
    props.setLoginBtnClicked(true);
  };

  return (
    <nav className="navigation">
      <h1 className="navigation__heading">
        T<span>OD</span>O
      </h1>
      <ul>
        <li>
          <a className="link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="link" href="/">
            About
          </a>
        </li>
        <li>
          <a className="link" href="/">
            Contect us!
          </a>
        </li>
      </ul>
      <button onClick={logInShowHandler} className="btn navigation__btn">
        Log In!
      </button>
    </nav>
  );
};

export default Nav;
