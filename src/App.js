import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "components";
import { Home, Question, CreateQuestion } from "routes";

import "app.scss";

export default () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/questions/:id" component={Question} />
      <Route path="/create" component={CreateQuestion} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
