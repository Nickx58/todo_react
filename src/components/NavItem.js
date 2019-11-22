import React from "react";
import PropTypes from "prop-types";

const NavItem = props => {
  const classes = ["nav__item"];

  if (props.classes && props.classes instanceof Array) {
    classes.push(...props.classes);
  } else if (props.classes) {
    classes.push(props.classes);
  }

  return <div className={classes.join(" ")}>{props.children}</div>;
};

NavItem.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default NavItem;
