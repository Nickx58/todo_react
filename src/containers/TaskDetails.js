import React, { useState } from "react";
import { connect } from "react-redux";
import startCase from "lodash/startCase";

import "../styles/TaskDetails.scss";
import BinIcon from "../assets/bin.svg";
import EditIcon from "../assets/edit.svg";
import DoneIcon from "../assets/done.svg";

import { updateTask, toggleTaskSelection } from "../actions";
import TaskForm from "../components/TaskForm";
import { TaskStatus } from "../constants/tasks";
import EmptyMessage from "../components/EmptyMessage";
import CircularProgress from "../components/CircularProgress";

const TaskDetails = props => {
  const [isEditing, setIsEditing] = useState(false);
  const task = props.selectedTask;
  const isTaskSelected = !!task.id;

  const handleTaskClose = () => {
    props.dispatch(toggleTaskSelection(task.id));
  };

  const handleMarkAsDone = () => {
    props.dispatch(
      updateTask({
        ...task,
        progress: 100,
        status: TaskStatus.COMPLETED
      })
    );
  };

  const handleMarkAsArchived = () => {
    props.dispatch(
      updateTask({
        ...task,
        status: TaskStatus.ARCHIVED
      })
    );
  };

  const handleEditTask = task => {
    setIsEditing(false);
    props.dispatch(updateTask(task));
  };

  const handleFormCancel = () => {
    setIsEditing(false);
  };

  const TaskActions = () => {
    switch (task.status) {
      case TaskStatus.ARCHIVED:
        return null;
      case TaskStatus.COMPLETED:
        return (
          <div className="task-panel__actions">
            <button
              className="button button_danger"
              onClick={handleMarkAsArchived}
            >
              <img src={BinIcon} alt="archive" className="button__icon" />
              <span className="button__text">Archive</span>
            </button>
          </div>
        );

      default:
        return (
          <div className="task-panel__actions">
            <button
              className="button button_info"
              onClick={() => setIsEditing(true)}
            >
              <img src={EditIcon} alt="edit" className="button__icon" />
              <span className="button__text">Edit Task</span>
            </button>
            <button
              className="button button_success"
              onClick={handleMarkAsDone}
            >
              <img src={DoneIcon} alt="done" className="button__icon" />
              <span className="button__text">Done</span>
            </button>
          </div>
        );
    }
  };

  if (isTaskSelected && isEditing) {
    return (
      <div className="tasks__details task-panel">
        <TaskForm
          task={task}
          onSubmit={handleEditTask}
          onCancel={handleFormCancel}
        />
      </div>
    );
  } else if (isTaskSelected) {
    return (
      <div className="tasks__details task-panel">
        <h1 className="task-panel__title">
          <span className="title">{task.title}</span>
          <span className="close" onClick={handleTaskClose}>
            &times;
          </span>
        </h1>
        <div className="task-panel__metas">
          <div className="task-panel__section">
            <div className="meta">
              <span className="meta__title">ID:</span>
              <span className="meta__value">{task.id}</span>
            </div>
            <div className="meta">
              <span className="meta__title">Created At:</span>
              <span className="meta__value">{task.createdAt}</span>
            </div>
            <div className="meta">
              <span className="meta__title">Priority:</span>
              <span className="meta__value">{startCase(task.priority)}</span>
            </div>
            <div className="meta">
              <span className="meta__title">Tags:</span>
              <span className="meta__value">
                {task.tags &&
                  task.tags.split(",").map((tag, key) => (
                    <span key={key} className="tag">
                      {tag.trim()}
                    </span>
                  ))}
              </span>
            </div>
            <div className="meta">
              <span className="meta__title">Status:</span>
              <span className="meta__value">{startCase(task.status)}</span>
            </div>
          </div>
          <div className="task-panel__section">
            <CircularProgress
              className="task-panel__canvas"
              color="#fbc02d"
              showLabel
              width={150}
              progress={task.progress}
            />
          </div>
        </div>
        {task.description && (
          <div className="task-panel__details-label">Description: </div>
        )}
        <p className="task-panel__details">{task.description}</p>
        {TaskActions()}
      </div>
    );
  }

  return (
    <div className="tasks__details task-panel">
      <EmptyMessage message="No tasks selected" />
    </div>
  );
};

export default connect(state => ({
  selectedTask: state.tasks[state.selectedTask] || {}
}))(TaskDetails);
