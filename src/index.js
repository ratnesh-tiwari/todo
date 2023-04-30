import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoProvider from "./context/TodoProvider";
import TagsProvider from "./context/TagsProvider";

ReactDOM.render(
  <TagsProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </TagsProvider>,
  document.getElementById("root")
);
