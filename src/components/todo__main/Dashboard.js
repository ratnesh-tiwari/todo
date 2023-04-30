import React from "react";
import LeftNav from "./left/LeftNav";
import LeftTag from "./left/LeftTag";
import TodoLayout from "./middle/TodoLayout";

const Dashboard = props => {
  return (
    <div className="dashboard">
      <div className="left">
        <LeftNav setIsAuthenticated={props.setIsAuthenticated} />
        <div className="left__tags">
          <h3 className="heading__tertiery">Tags</h3>
          <div className="left__tags--list">
            <LeftTag />
          </div>
        </div>
      </div>
      <div className="middle">
        <TodoLayout />
      </div>
      <div className="right">Right</div>
    </div>
  );
};

export default Dashboard;
