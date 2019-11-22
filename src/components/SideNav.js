import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "../styles/SideNav.scss";
import TasksIcon from "../assets/task-search.svg";
import TaskPendingIcon from "../assets/task-pending.svg";
import TaskArchivedIcon from "../assets/task-archived.svg";
import TaskCompleteIcon from "../assets/task-completed.svg";
import TaskInProgressIcon from "../assets/task-in-progress.svg";

import Author from "./Author";
import NavItem from "./NavItem";

const SideNav = props => {
  const handleToggle = () => {
    if (props.onToggle) {
      props.onToggle();
    }
  };

  return (
    <Fragment>
      <div className="app__side-nav-backdrop" onClick={handleToggle}></div>
      <nav className="app__side-nav nav">
        <NavItem classes="nav__header">
          <Author name="Nikhil Sharma" />
        </NavItem>
        <NavItem>
          <NavLink
            exact
            to="/tasks"
            className="nav__link link"
            activeClassName="link_active"
            onClick={handleToggle}
          >
            <img src={TasksIcon} alt="task" className="link__icon" />
            <span className="link__text">All Tasks</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/tasks/pending"
            className="nav__link link"
            activeClassName="link_active"
            onClick={handleToggle}
          >
            <img src={TaskPendingIcon} alt="task" className="link__icon" />
            <span className="link__text">Pending</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/tasks/in-progress"
            className="nav__link link"
            activeClassName="link_active"
            onClick={handleToggle}
          >
            <img src={TaskInProgressIcon} alt="task" className="link__icon" />
            <span className="link__text">In Progress</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/tasks/completed"
            className="nav__link link"
            activeClassName="link_active"
            onClick={handleToggle}
          >
            <img src={TaskCompleteIcon} alt="task" className="link__icon" />
            <span className="link__text">Completed</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/tasks/archived"
            className="nav__link link"
            activeClassName="link_active"
            onClick={handleToggle}
          >
            <img src={TaskArchivedIcon} alt="task" className="link__icon" />
            <span className="link__text">Archived</span>
          </NavLink>
        </NavItem>
        {/* <NavItem classes="overall-progress">
        <div className="overall-progress__label">Task Progress</div>
        <CircularProgress
          className="overall-progress__canvas"
          color="#fbc02d"
          showLabel
          width={150}
          progress={70}
        />
      </NavItem> */}
      </nav>
      <div className="app__side-nav-handle">
        <div className="hamburger-icon" onClick={handleToggle}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </Fragment>
  );
};

SideNav.propTypes = {
  isVisible: PropTypes.bool,
  onToggle: PropTypes.func
};

export default SideNav;
