import { combineReducers } from "redux";

import tasks from "./tasks";
import selectedTask from "./selectedTask";

export default combineReducers({
  tasks,
  selectedTask
});
