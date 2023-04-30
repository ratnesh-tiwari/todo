import React, { useState, useContext } from "react";
import TagsContext from "../../../context/tags-context";

const TagAddForm = props => {
  const tagCtx = useContext(TagsContext);
  const [tagName, setTagName] = useState("");
  const [bgName, setBgName] = useState("");
  const { setTagFormShow } = props;

  const tagInShowHandler = () => {
    setTagFormShow(false);
  };

  const onTagNameChangeHandler = e => {
    setTagName(e.target.value);
  };

  const onBgNameChangeHandler = e => {
    setBgName(e.target.value);
  };

  const onTagAddHandler = e => {
    e.preventDefault();
    setTagFormShow(false);
    tagCtx.addTag({ tagName, bgName, key: Math.random() * 100 + 1 });
    console.log({ tagCtx, tagName, bgName });
    console.log(tagCtx.tagName);
  };

  return (
    <React.Fragment>
      <div onClick={tagInShowHandler} className="backdrop"></div>
      <form className="form">
        <ion-icon onClick={tagInShowHandler} name="close-outline"></ion-icon>
        <div className="form__center">
          <div className="form__group">
            <input
              value={tagName}
              placeholder="Enter tag name"
              className="form__input"
              type="text"
              id="tag"
              name="tag"
              onChange={onTagNameChangeHandler}
            />
            <label className="form__label" htmlFor="tag">
              Enter tag name
            </label>
          </div>
          <div className="form__group">
            <input
              value={bgName}
              className="form__input"
              type="text"
              id="color"
              name="color"
              placeholder="Enter color"
              onChange={onBgNameChangeHandler}
            />
            <label className="form__label" htmlFor="color">
              Enter color
            </label>
          </div>
          <div className="form__group center">
            <button onClick={onTagAddHandler} className="btn form__btn">
              Add Tag
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default React.memo(TagAddForm);
