import React from "react";

import Header from "../containers/Header";

const MainContainer = props => (
  <div className="app__main-container">
    <Header title="All Tasks" />
    <div className="app__body">{props.children}</div>
  </div>
);

export default MainContainer;
