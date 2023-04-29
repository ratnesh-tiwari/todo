import React from "react";

const LeftNav = () => {
  return (
    <React.Fragment>
      <h1 className="navigation__heading">
        T<span>OD</span>O
      </h1>
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
        </button>{" "}
      </div>
    </React.Fragment>
  );
};

export default LeftNav;
