import React, { useState } from "react";
import TodoAddForm from "./TodoAddForm";
import TodoList from "./TodoList";

const TodoLayout = () => {
  const [todoFormShow, setTodoFormShow] = useState(false);

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
        {todoFormShow && <TodoAddForm setTodoFormShow={setTodoFormShow} />}
      </div>
      <div className="task__container">
        <TodoList />
      </div>
    </div>
  );
};

export default TodoLayout;
