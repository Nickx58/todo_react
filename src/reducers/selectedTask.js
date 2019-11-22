import { TOGGLE_TASK_SELECTION } from "../constants/action-types";

const initialState = null;

const selectedTask = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TASK_SELECTION:
      return state === action.taskId ? initialState : action.taskId;
    default:
      return state;
  }
};

export default selectedTask;
