import React from "react";
import PropTypes from "prop-types";

import "../styles/Author.scss";

const Author = ({ name }) => (
  <div className="author">
    <div className="author__details">
      <div className="author__label">Showing tasks for</div>
      <div className="author__name">{name}</div>
    </div>
  </div>
);

Author.propTypes = {
  name: PropTypes.string.isRequired
};

export default Author;
