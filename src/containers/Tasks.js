import React from "react";
import { connect } from "react-redux";

import "../styles/Tasks.scss";
import TaskDetails from "./TaskDetails";
import TaskList from "./TaskList";

const Tasks = props => {
  const classes = props.selectedTask
    ? "tasks tasks__details-visible"
    : "tasks tasks__list-visible";
  return (
    <div className={classes}>
      <TaskList {...props} />
      <TaskDetails />
    </div>
  );
};

const CoonectedTasks = connect(({ selectedTask }) => ({ selectedTask }))(Tasks);

export default status => props => <CoonectedTasks {...props} status={status} />;
