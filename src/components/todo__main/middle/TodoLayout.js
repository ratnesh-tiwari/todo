import React, { useState } from "react";
import TagAddForm from "./TagAddForm";
import TodoAddForm from "./TodoAddForm";
import TodoList from "./TodoList";

const TodoLayout = () => {
  const [tagFormShow, setTagFormShow] = useState(false);
  const [todoFormShow, setTodoFormShow] = useState(false);

  const tagShowHandler = () => {
    setTagFormShow(true);
  };

  const todoShowHandler = () => {
    setTodoFormShow(true);
  };

  return (
    <div className="middle__container">
      <h1>It's good to have you back!</h1>
      <div className="middle__btn">
        <button onClick={todoShowHandler} className="btn add__todo__btn">
          Add new task
        </button>
        <button onClick={tagShowHandler} className="btn add__todo__tags">
          Add new tag
        </button>
        {tagFormShow && <TagAddForm setTagFormShow={setTagFormShow} />}
        {todoFormShow && <TodoAddForm setTodoFormShow={setTodoFormShow} />}
      </div>
      <div className="task__container">
        <TodoList />
      </div>
    </div>
  );
};

export default TodoLayout;
