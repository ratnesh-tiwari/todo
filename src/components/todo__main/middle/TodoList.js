import React, { useState, useContext } from "react";
import TodoContext from "../../../context/todo-context";
import ConfirmationHandler from "../ConfirmationHandler";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  const [confirmation, setConfirmation] = useState(false);

  console.log(todoCtx.todo);
  if (todoCtx.todo.length === 0) {
    return (
      <p
        style={{
          fontSize: "1.8rem",
          display: "flex",
          justifyContent: "center"
        }}
      >
        Todo list is empty
      </p>
    );
  }

  const handleDeleteTbtn = () => {
    setConfirmation(true);
  };

  return (
    <React.Fragment>
      {todoCtx.todo.map(item => (
        <div className="todo__list" key={item.uid}>
          <input className="checkbox" type="checkbox" />
          <span key={item.uid} id={item.uid}>
            {item.todo}
          </span>
          <span className="todo__tag" style={{ backgroundColor: "green" }}>
            Design
          </span>
          <ion-icon onClick={handleDeleteTbtn} name="trash-outline"></ion-icon>
          {confirmation && (
            <ConfirmationHandler
              uid={item.uid}
              name="todo"
              close={setConfirmation}
            />
          )}
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
