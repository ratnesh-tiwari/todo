import React, { useReducer } from "react";
import TagsContext from "./tags-context";

const defaultTagState = {
  tagName: []
};

const tagReducer = (state, action) => {
  if (action.type === "ADD_TAG") {
    const updatedTag = [...action.tag];
    // console.log(updatedTag);
    return {
      tagName: updatedTag
    };
  }
  return defaultTagState;
};

const TagsProvider = props => {
  const [todoState, dispatchTagAction] = useReducer(
    tagReducer,
    defaultTagState
  );

  const addTagsHandler = tag => {
    // console.log("addtag fn");
    dispatchTagAction({ type: "ADD_TAG", tag: tag });
  };

  const removeTagsHandler = tagId => {
    dispatchTagAction({ type: "REMOVE_TAG", tagId: tagId });
  };

  const tagsContext = {
    tagName: todoState.tagName,
    addTag: addTagsHandler,
    removeTag: removeTagsHandler
  };

  return (
    <TagsContext.Provider value={tagsContext}>
      {props.children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
