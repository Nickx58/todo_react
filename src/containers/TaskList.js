import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import "../styles/TaskList.scss";
import { TaskStatus } from "../constants/tasks";
import { toggleTaskSelection } from "../actions";
import SearchTask from "../components/SearchTask";
import TaskSummary from "../components/TaskSummary";
import EmptyMessage from "../components/EmptyMessage";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      search: ""
    };
  }

  componentWillReceiveProps(props) {
    this.initList(props);
  }

  componentDidMount() {
    this.initList(this.props);
  }

  initList(props) {
    const tasks = props.tasks.filter(
      t =>
        (t.status === props.status ||
          (props.status === "all" && t.status !== TaskStatus.ARCHIVED)) &&
        t.title.match(new RegExp(this.state.search, "i"))
    );
    this.setState({ ...this.state, tasks });
  }

  handleSearch(title) {
    this.setState({
      ...this.state,
      search: title,
      tasks: this.props.tasks.filter(
        t =>
          (t.status === this.props.status ||
            (this.props.status === "all" &&
              t.status !== TaskStatus.ARCHIVED)) &&
          t.title.match(new RegExp(title, "i"))
      )
    });
  }

  handleTaskSelection(task) {
    this.props.dispatch(toggleTaskSelection(task.id));
  }

  render() {
    const tasks = this.state.tasks;
    const selectedTask = this.props.selectedTask;
    return (
      <div className="tasks__list task-list">
        <SearchTask onSearch={this.handleSearch.bind(this)} />
        {tasks.length ? (
          <div className="task-list__list">
            {tasks.map((task, key) => (
              <TaskSummary
                key={key}
                task={task}
                isSelected={selectedTask.id === task.id}
                onTaskSelected={this.handleTaskSelection.bind(this, task)}
              />
            ))}
          </div>
        ) : (
          <EmptyMessage message="No tasks!" />
        )}
      </div>
    );
  }
}

TaskList.propTypes = {
  status: PropTypes.string
};

export default connect(state => ({
  tasks: Object.keys(state.tasks).map(k => state.tasks[k]),
  selectedTask: state.tasks[state.selectedTask] || {}
}))(TaskList);
