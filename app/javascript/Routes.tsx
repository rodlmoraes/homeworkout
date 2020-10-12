import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LessonList from "./pages/LessonList";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={LessonList} />
    </Switch>
  </Router>
);
