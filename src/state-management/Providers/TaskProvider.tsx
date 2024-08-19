import React, { ReactNode, useReducer } from "react";
import TaskContext from "../contexts/taskContext";
import taskReducer from "../reducer/taskReducer";

interface Prop {
  children: ReactNode;
}

function TaskProvider({ children }: Prop) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
