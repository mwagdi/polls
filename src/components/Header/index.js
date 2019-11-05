import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

export default () => (
  <header className="header">
    <NavLink className="link" activeClassName="link--active" exact to="/">
      Questions
    </NavLink>
    <NavLink className="link" activeClassName="link--active" to="/create">
      Create Question
    </NavLink>
  </header>
);
