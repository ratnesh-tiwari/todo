import React, { useState, useContext, useEffect } from "react";
import LeftNav from "./left/LeftNav";
import LeftTag from "./left/LeftTag";
import TodoLayout from "./middle/TodoLayout";
import TagAddForm from "./left/TagAddForm";
import { auth, db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import TagsContext from "../../context/tags-context";
import TodoContext from "../../context/todo-context";
import { useCallback } from "react";
import CalendarComp from "./right/calender/Calender";
import PieChart from "./right/graph/Pie";

const Dashboard = props => {
  const tagCtx = useContext(TagsContext);
  const todoCtx = useContext(TodoContext);
  const [tagFormShow, setTagFormShow] = useState(false);
  const [onLoad, SetOnLoad] = useState(true);

  const fetchData = useCallback(async () => {
    onValue(ref(db, `${auth.currentUser.uid}/tag`), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        const output = Object.values(data);
        tagCtx.addTag(output);
      }
    });

    onValue(ref(db, `${auth.currentUser.uid}/todo`), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        const output = Object.values(data);
        todoCtx.addTodo(output);
      }
    });
  }, [tagCtx, todoCtx]);

  useEffect(() => {
    if (onLoad) {
      fetchData();
      SetOnLoad(false);
    }
  }, [fetchData, onLoad]);

  const tagShowHandler = () => {
    setTagFormShow(true);
  };

  return (
    <React.Fragment>
      {tagFormShow && <TagAddForm setTagFormShow={setTagFormShow} />}
      <div className="dashboard">
        <div className="left">
          <LeftNav setIsAuthenticated={props.setIsAuthenticated} />
          <div className="left__tags">
            <div className="left__tag__container">
              <h3 className="heading__tertiery">Tags</h3>
              <button onClick={tagShowHandler} className="btn add__todo__tags">
                Add tag
              </button>
            </div>
            <div className="left__tags--list">
              <LeftTag />
            </div>
          </div>
        </div>
        <div className="middle">
          <TodoLayout />
        </div>
        <div className="right">
          <div className="calender">
            <h2>Calendar</h2>
            <CalendarComp />
          </div>
          <div className="pie">
            <h2>Pie Chart</h2>
            <PieChart />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
