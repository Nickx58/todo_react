import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../styles/Header.scss";
import { addTask } from "../actions";
import plusIcon from "../assets/plus.svg";
import TaskForm from "../components/TaskForm";

const Header = props => {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const handleFormSubmit = task => {
    setIsCreateModalVisible(false);
    props.dispatch(addTask(task));
  };

  const handleFormCancel = () => {
    setIsCreateModalVisible(false);
  };

  return (
    <Fragment>
      <header className="app__header header">
        <div className="header__title">{props.title}</div>
        <button
          className="header__action header__action_lg-screen button button_default"
          onClick={() => setIsCreateModalVisible(true)}
        >
          <img src={plusIcon} className="button__icon" alt="plus" />
          <span className="button__text">Add Tasks</span>
        </button>
        {isCreateModalVisible && (
          <div className="modal">
            <div className="modal__body">
              <TaskForm
                onSubmit={handleFormSubmit}
                onCancel={handleFormCancel}
              />
            </div>
            <div className="modal__backdrop" onClick={handleFormCancel} />
          </div>
        )}
      </header>
      {!props.selectedTask && (
        <button
          className="header__action header__action_sm-screen button button_fab"
          onClick={() => setIsCreateModalVisible(true)}
        >
          +
        </button>
      )}
    </Fragment>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default connect(({ selectedTask }) => ({ selectedTask }))(Header);
