import React from "react";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const LeftNav = props => {
  const onSignOut = () => {
    signOut(auth);
    props.setIsAuthenticated(false);
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="navigation__heading">
          T<span>OD</span>O
        </h1>
        <button onClick={onSignOut} className="btn sign__out">
          Sign Out!
        </button>
      </div>
      <div className="left__side">
        <button className="btn left__btn">
          <ion-icon name="home-outline"></ion-icon>Home
        </button>
        <button className="btn left__btn">
          <ion-icon name="list-outline"></ion-icon>My Tasks
        </button>
        <h3 className="heading__tertiery">Statistics</h3>
        <button className="btn left__btn">
          <ion-icon name="stats-chart-outline"></ion-icon>
          Portfolio
        </button>
        <button className="btn left__btn">
          <ion-icon name="checkmark-done-outline"></ion-icon>
          Goals
        </button>
      </div>
    </React.Fragment>
  );
};

export default LeftNav;
