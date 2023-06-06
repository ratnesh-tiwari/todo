import React, { useContext, useState } from "react";
import TagsContext from "../../../context/tags-context";
import ConfirmationHandler from "../ConfirmationHandler";

const LeftTag = props => {
  const tagCtx = useContext(TagsContext);
  const [confirmation, setConfirmation] = useState(false);

  const handleDeleteTbtn = () => {
    setConfirmation(true);
  };

  return (
    <React.Fragment>
      {tagCtx.tagName.map(item => (
        <div
          style={{ marginTop: "1.8rem" }}
          className="left__tags--list-item"
          key={tagCtx.uid}
        >
          <p
            className="left__colors"
            style={{ backgroundColor: item.bgColor }}
            key={tagCtx.uid}
            id={tagCtx.uid}
          ></p>
          <p>{item.tag}</p>
          <ion-icon onClick={handleDeleteTbtn} name="trash-outline"></ion-icon>
          {confirmation && (
            <ConfirmationHandler
              uid={item.uid}
              name="tag"
              close={setConfirmation}
            />
          )}
        </div>
      ))}
      {/* <div className="left__tags--list-item">
        <p
          className="left__colors"
          style={{ backgroundColor: props.bgColor }}
        ></p>
        <p>{props.tagName}</p>
      </div> */}
    </React.Fragment>
  );
};

export default LeftTag;
