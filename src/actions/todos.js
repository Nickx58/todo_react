import * as actionTypes from "../constants/action-types";

export const addTask = task => ({
  type: actionTypes.ADD_TASK,
  task
});

export const updateTask = task => ({
  type: actionTypes.UPDATE_TASK,
  task
});

export const deleteTask = task => ({
  type: actionTypes.DELETE_TASK,
  task
});

export const moveTask = (task, position) => ({
  type: actionTypes.MOVE_TASK,
  task,
  position
});

export const toggleTaskSelection = taskId => ({
  type: actionTypes.TOGGLE_TASK_SELECTION,
  taskId
});
