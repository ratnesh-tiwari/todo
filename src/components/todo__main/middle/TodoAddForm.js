import React, { useState, useContext } from "react";
import TodoContext from "../../../context/todo-context";
import { db, auth } from "../../../firebase";
import { ref, set, onValue } from "firebase/database";
import { uid } from "uid";

const TodoAddForm = props => {
  const todoCtx = useContext(TodoContext);
  const [todoName, setTodoName] = useState("");
  const [todoNameIsValid, setTodoNameIsValid] = useState(true);
  const { setTodoFormShow } = props;

  const todoInShowHandler = () => {
    setTodoFormShow(false);
  };

  const onTodoNameChangeHandler = e => {
    setTodoName(e.target.value);
    if (todoName.trim().length < 2) {
      setTodoNameIsValid(false);
      return;
    } else {
      setTodoNameIsValid(true);
    }
  };

  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `${auth.currentUser.uid}/todo/${uidd}`), {
      todo: todoName,
      uid: uidd
    });
  };

  const fetchData = () => {
    onValue(ref(db, `${auth.currentUser.uid}/todo`), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        const output = Object.values(data);
        todoCtx.addTodo(output);
      }
    });
  };

  const onTodoAddHandler = e => {
    e.preventDefault();
    writeToDatabase();
    fetchData();
    setTodoFormShow(false);
  };

  return (
    <React.Fragment>
      <div onClick={todoInShowHandler} className="backdrop"></div>
      <form className="form">
        <ion-icon onClick={todoInShowHandler} name="close-outline"></ion-icon>
        <div className="form__center">
          <div className="form__group">
            <input
              value={todoName}
              placeholder="Enter tag name"
              className="form__input"
              type="text"
              id="tag"
              name="tag"
              minLength={3}
              onChange={onTodoNameChangeHandler}
            />
            <label className="form__label" htmlFor="tag">
              Enter tag name
            </label>
          </div>
          <div className="form__group center">
            {!todoNameIsValid && (
              <p style={{ color: "orangered", fontSize: "1.8rem" }}>
                Entered name must be above 2 charcter.
              </p>
            )}
            {todoNameIsValid && (
              <button onClick={onTodoAddHandler} className="btn form__btn">
                Add Tag
              </button>
            )}
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default React.memo(TodoAddForm);
