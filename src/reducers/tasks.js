import keyBy from "lodash/keyBy";
import defaults from "lodash/defaults";
import uniqueId from "lodash/uniqueId";

import { formatDate } from "../utils";
import { TaskPriority, TaskStatus } from "../constants/tasks";
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "../constants/action-types";

const t = [
  {
    id: uniqueId("task-"),
    title: "Create a todo app in React",
    description: "",
    progress: 30,
    priority: TaskPriority.HIGH,
    tags: "todo, work",
    status: TaskStatus.PENDING,
    createdAt: formatDate(new Date())
  },
  {
    id: uniqueId("task-"),
    title: "Complete 100km running in one week",
    description: "",
    progress: 0,
    priority: TaskPriority.MEDIUM,
    tags: "health",
    status: TaskStatus.PENDING,
    createdAt: formatDate(new Date())
  },
  {
    id: uniqueId("task-"),
    title: "Watch 2 movies this weekend with friends",
    description: "",
    progress: 100,
    priority: TaskPriority.LOW,
    tags: "life, friends",
    status: TaskStatus.COMPLETED,
    createdAt: formatDate(new Date())
  },
  {
    id: uniqueId("task-"),
    title: "Call doctor for appointments",
    description: "",
    progress: 0,
    priority: TaskPriority.LOW,
    tags: "health",
    status: TaskStatus.PENDING,
    createdAt: formatDate(new Date())
  },
  {
    id: uniqueId("task-"),
    title: "Pay house rent",
    description: "",
    progress: 0,
    priority: TaskPriority.LOW,
    tags: "todo",
    status: TaskStatus.PENDING,
    createdAt: formatDate(new Date())
  }
];

const initialState = keyBy(t, "id");

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const task = defaults(action.task, {
        id: uniqueId("task-"),
        title: "Untitled task",
        description: "",
        progress: 0,
        priority: TaskPriority.LOW,
        tags: "todo",
        status: TaskStatus.PENDING,
        createdAt: formatDate(new Date())
      });
      return {
        [task.id]: task,
        ...state
      };
    }
    case UPDATE_TASK: {
      const { [action.task.id]: task, ...otherTasks } = state;
      return {
        [task.id]: {
          ...task,
          ...action.task
        },
        ...otherTasks
      };
    }
    case DELETE_TASK: {
      const { [action.task.id]: task, ...otherTasks } = state;
      return otherTasks;
    }
    default:
      return state;
  }
};

export default tasks;
