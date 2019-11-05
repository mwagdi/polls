import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <header className="header">
    <NavLink className="link" activeClassName="link--active" to="/">
      Questions
    </NavLink>
    <NavLink className="link" activeClassName="link--active" to="/create">
      Create Question
    </NavLink>
  </header>
);
