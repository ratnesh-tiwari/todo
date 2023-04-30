import React from "react";

const TodoContext = React.createContext({
  todo: [],
  totalTodo: 0,
  addTodo() {},
  deleteTodo() {},
  completedTask() {}
});

export default TodoContext;
