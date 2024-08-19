import { useContext } from "react";
import TaskContext from "../contexts/taskContext";

function useTask() {
  return useContext(TaskContext);
}

export default useTask;
