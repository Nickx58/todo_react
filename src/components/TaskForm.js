import React, { useState } from "react";
import PropTypes from "prop-types";

import "../styles/TaskForm.scss";
import { TaskStatus, TaskPriority } from "../constants/tasks";

const TaskForm = props => {
  const [task, setTask] = useState(props.task || {});

  const handleProgressChange = e => {
    const value = +e.target.value;
    let status = task.status;

    if (value === 100) {
      status = TaskStatus.COMPLETED;
    } else if (value === 0) {
      status = TaskStatus.PENDING;
    } else {
      status = TaskStatus.IN_PROGRESS;
    }

    setTask({ ...task, progress: value, status });
  };

  const handleValueChange = (e, property) => {
    setTask({ ...task, [property]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    props.onSubmit(task);
  };

  const handleFormCancel = e => {
    e.preventDefault();
    props.onCancel();
  };

  return (
    <form className="task-form" onSubmit={handleFormSubmit}>
      <h1 className="task-form__title">
        {props.task ? "Edit Task" : "Create Task "}
      </h1>
      <div className="task-form__group">
        <label className="task-form__label">Title:</label>
        <input
          className="task-form__input"
          type="text"
          defaultValue={props.task && props.task.title}
          placeholder="Task summary"
          onChange={e => handleValueChange(e, "title")}
        />
      </div>
      <div className="task-form__group">
        <label className="task-form__label">Description:</label>
        <textarea
          className="task-form__input"
          type="text"
          defaultValue={props.task && props.task.description}
          placeholder="Task details (optional)"
          onChange={e => handleValueChange(e, "description")}
        />
      </div>
      <div className="task-form__group">
        <label className="task-form__label">Tags:</label>
        <input
          className="task-form__input"
          type="text"
          defaultValue={props.task && props.task.tags}
          placeholder="Comma-separated tags"
          onChange={e => handleValueChange(e, "tags")}
        />
      </div>
      <div className="task-form__group">
        <label className="task-form__label">Progress:</label>
        <input
          className="task-form__input"
          type="number"
          defaultValue={props.task && props.task.progress}
          placeholder="Progress in percentage between (0-100)"
          onChange={handleProgressChange}
        />
      </div>
      <div className="task-form__group">
        <label className="task-form__label">Progress:</label>
        <select
          className="task-form__input"
          defaultValue={props.task && props.task.priority}
          placeholder="Task priority"
          onChange={e => handleValueChange(e, "priority")}
        >
          <option value={TaskPriority.LOW}>Low</option>
          <option value={TaskPriority.MEDIUM}>Medium</option>
          <option value={TaskPriority.HIGH}>High</option>
        </select>
      </div>
      <div className="task-form__group task-form__group_right">
        <button
          className="task-form__action button button_default"
          type="button"
          onClick={handleFormCancel}
        >
          Cancel
        </button>
        <button className="task-form__action button button_info" type="submit">
          {props.task ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

TaskForm.propType = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    progress: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default TaskForm;
