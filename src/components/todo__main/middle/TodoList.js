import React, { useContext } from "react";
import TodoContext from "../../../context/todo-context";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  if (todoCtx.todo.length === 0) {
    return <p style={{ fontSize: "1.8rem" }}>Todo list is empty</p>;
  }

  return (
    <React.Fragment>
      {todoCtx.todo.map(todo => (
        <div className="todo__list">
          <input className="checkbox" type="checkbox" />
          <span>{todo}</span>
          <span className="todo__tag" style={{ backgroundColor: "green" }}>
            Design
          </span>
          <ion-icon name="trash-outline"></ion-icon>
        </div>
      ))}
      {/* <div className="todo__list">
        <input className="checkbox" type="checkbox" />
        <span>{todoCtx.todo}</span>
        <span className="todo__tag" style={{ backgroundColor: "green" }}>
          Design
        </span>
        <ion-icon name="trash-outline"></ion-icon>
      </div> */}
    </React.Fragment>
  );
};

export default React.memo(TodoList);
