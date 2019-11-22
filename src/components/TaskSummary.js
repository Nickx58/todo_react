import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskSummary.scss";
import CircularProgress from "./CircularProgress";

const TaskSummary = props => {
  const classes = props.isSelected
    ? "task-list__item task task_selected"
    : "task-list__item task";
  return (
    <div className={classes} onClick={props.onTaskSelected}>
      <div className="task__drag-handle" />
      <div className="task__details">
        <div className="task__title">{props.task.title}</div>
        <div className="task__tags">
          {props.task.tags &&
            props.task.tags.split(",").map((tag, key) => (
              <span className="tag" key={key}>
                {tag.trim()}
              </span>
            ))}
        </div>
      </div>
      <CircularProgress
        className="task__progress"
        color="#7e57c2"
        width={40}
        progress={props.task.progress}
      />
    </div>
  );
};

TaskSummary.propTypes = {
  isSelected: PropTypes.bool,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.string,
    progress: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }),
  onTaskSelected: PropTypes.func.isRequired
};

export default TaskSummary;
