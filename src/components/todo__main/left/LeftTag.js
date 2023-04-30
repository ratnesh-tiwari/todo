import React, { useContext } from "react";
import TagsContext from "../../../context/tags-context";

const LeftTag = props => {
  const tagCtx = useContext(TagsContext);

  return (
    <React.Fragment>
      {tagCtx.tagName.map(item => (
        <div className="left__tags--list-item">
          <p
            className="left__colors"
            style={{ backgroundColor: item.bgName }}
            key={tagCtx.key}
          ></p>
          <p>{item.tagName}</p>
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
