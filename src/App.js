import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "components";
import { Home, Question } from "routes";

export default () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/:id" component={Question} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
