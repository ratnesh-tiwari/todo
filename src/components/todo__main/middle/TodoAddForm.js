import React, { useState, useContext } from "react";
import TodoContext from "../../../context/todo-context";
import { db, auth } from "../../../firebase";
import { ref, set, onValue } from "firebase/database";
import { uid } from "uid";
import TagsContext from "../../../context/tags-context";

const TodoAddForm = props => {
  const todoCtx = useContext(TodoContext);
  const { tagName } = useContext(TagsContext);
  const [todoName, setTodoName] = useState("");
  const [tagNameCh, setTagNameCh] = useState("");
  const { setTodoFormShow } = props;

  const todoInShowHandler = () => {
    setTodoFormShow(false);
  };

  const onTagNameChangeHandler = e => {
    setTagNameCh(e.target.value);
  };

  const onTodoNameChangeHandler = e => {
    setTodoName(e.target.value);
  };

  const writeToDatabase = () => {
    const uidd = uid();
    if (tagNameCh.trim().length === 0) {
      alert("Tag can't be empty");
      return;
    }
    set(ref(db, `${auth.currentUser.uid}/todo/${uidd}`), {
      todo: todoName,
      uid: uidd,
      tagUid: tagNameCh,
      isChecked: false
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
    if (todoName.trim().length <= 2) {
      alert("Todo Name cant be empty");
      setTodoFormShow(false);
      return;
    }
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
          <div className="form__group">
            <select
              className="form__input"
              value={tagNameCh}
              onChange={onTagNameChangeHandler}
            >
              <option>Select an Tag</option>
              {tagName.map(item => (
                <option value={item.uid}>{item.tag}</option>
              ))}
            </select>
          </div>
          <div className="form__group center">
            <button onClick={onTodoAddHandler} className="btn form__btn">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default React.memo(TodoAddForm);
