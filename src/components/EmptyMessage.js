import React from "react";
import PropTypes from "prop-types";

import "../styles/EmptyMessage.scss";
import WwwIcon from "../assets/www.svg";

const EmptyMessage = props => (
  <div className="empty-message">
    <img src={WwwIcon} alt="www" className="empty-message__icon" />
    <p className="empty-message__message">{props.message}</p>
  </div>
);

EmptyMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default EmptyMessage;
