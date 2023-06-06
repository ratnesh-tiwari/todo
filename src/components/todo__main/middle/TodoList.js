import React, { useState, useContext } from "react";
import TodoContext from "../../../context/todo-context";
import ConfirmationHandler from "../ConfirmationHandler";
import TagsContext from "../../../context/tags-context";
import { db, auth } from "../../../firebase";
// import { ref, set, onValue } from "firebase/database";
import { ref, update } from "firebase/database";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  const [confirmation, setConfirmation] = useState(false);
  const { tagName } = useContext(TagsContext);

  // console.log(tagName);
  // console.log(todoCtx.todo);
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

  const handleCheckboxChange = (uid, isChecked) => {
    console.log(uid, isChecked);
    const dbRef = ref(db, `${auth.currentUser.uid}/todo/${uid}`);
    const updates = {
      isChecked: !isChecked
    };
    update(dbRef, updates)
      .then(() => {
        console.log("Data updated successfully");
      })
      .catch(error => {
        console.error("Error updating data: ", error);
      });
  };

  const handleDeleteTbtn = () => {
    setConfirmation(true);
  };

  return (
    <React.Fragment>
      {todoCtx.todo.map(item => (
        <div className="todo__list" key={item.uid}>
          <input
            onChange={() => handleCheckboxChange(item.uid, item.isChecked)}
            className="checkbox"
            type="checkbox"
          />
          <span key={item.uid} id={item.uid}>
            {item.todo}
          </span>
          {/* <span className="todo__tag" style={{ backgroundColor: "green" }}>
            {tagName.forEach(el => {
              if (el.uid === item.tagUid) {
                return el.tag;
              }
            })}
          </span> */}
          {tagName.map(el => {
            if (el.uid === item.tagUid) {
              return (
                <span
                  className="todo__tag"
                  style={{ backgroundColor: el.bgColor }}
                >
                  {el.tag}
                </span>
              );
            }
            return null;
          })}
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
