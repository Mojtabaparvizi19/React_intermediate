import React, { Dispatch } from "react";
import { Action, Task } from "../reducer/taskReducer";

interface TaskListContext {
  tasks: Task[];
  dispatch: Dispatch<Action>;
}

const TaskContext = React.createContext<TaskListContext>({} as TaskListContext);

export default TaskContext;
