export interface Task {
  id: number;
  title: string;
}

interface Add {
  type: "ADD";
  task: Task;
}

interface Delete {
  type: "DELETE";
  taskId: number;
}
export type Action = Add | Delete;

function taskReducer(tasks: Task[], action: Action): Task[] {
  if (action.type === "ADD") {
    return [action.task, ...tasks];
  }

  if (action.type === "DELETE") {
    return tasks.filter((task) => task.id !== action.taskId);
  }
  return tasks;
}

export default taskReducer;
