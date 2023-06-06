import React, { useReducer } from "react";
import TodoContext from "./todo-context";

const defaultTodoState = {
  todo: [],
  totalTodo: 0
};

const todoReducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    const updateTodo = [...action.todo];
    const updateTotalTodo = updateTodo.length;
    return {
      todo: updateTodo,
      totalTodo: updateTotalTodo
    };
  }
  return defaultTodoState;
};

const TodoProvider = props => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTodoHandler = todo => {
    dispatchTodoAction({ type: "ADD_TODO", todo: todo });
  };

  const deleteTodoHandler = todoId => {
    dispatchTodoAction({ type: "DELETE_TODO", todoId: todoId });
  };

  const completedTaskHandler = todoId => {
    dispatchTodoAction({ type: "COMPLETED_TODO", todoId: todoId });
  };

  const todoContext = {
    todo: todoState.todo,
    totalTodo: todoState.totalTodo,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
    completedTask: completedTaskHandler
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
