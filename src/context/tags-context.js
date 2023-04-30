import React from "react";

const TagsContext = React.createContext({
  tagName: [],
  addTag() {},
  removeTag() {}
});

export default TagsContext;
