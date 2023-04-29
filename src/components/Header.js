import React from "react";

const Header = props => {
  const logInShowHandler = () => {
    props.setLoginBtnClicked(true);
  };
  return (
    <div className="header">
      <h1>Streamline Your Workflow and Get More Done</h1>
      <p className="reading__text">Prioritize your tasks and conquer them</p>
      <button className="btn header__btn" onClick={logInShowHandler}>
        Get Started!
      </button>
      <div className="reference">
        <p>
          <a
            className="link"
            href="https://www.freepik.com/free-vector/list-concept-illustration_7119323.htm#query=todo&position=3&from_view=search&track=robertav1_2_sidr"
          >
            Image by storyset
          </a>{" "}
          on Freepik
        </p>
        <p>
          <a
            className="link"
            href="https://www.freepik.com/free-vector/hand-drawn-business-planning_20286010.htm#query=todo&position=6&from_view=search&track=robertav1_2_sidr"
          >
            Image by pikisuperstar
          </a>{" "}
          on Freepik
        </p>
      </div>
    </div>
  );
};

export default Header;
