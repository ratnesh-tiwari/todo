import React from "react";
import LeftNav from "./left/LeftNav";
import LeftTag from "./left/LeftTag";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left">
        <LeftNav />
        <div className="left__tags">
          <h3 className="heading__tertiery">Tags</h3>
          <div className="left__tags--list">
            <LeftTag />
          </div>
        </div>
      </div>
      <div className="middle">Middle</div>
      <div className="right">Right</div>
    </div>
  );
};

export default Dashboard;
