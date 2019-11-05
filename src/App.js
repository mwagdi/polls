import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "components";
import { Home, Question, CreateQuestion } from "routes";

export default () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/questions/:id" component={Question} />
      <Route path="/create" component={CreateQuestion} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
