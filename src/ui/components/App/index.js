import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import Watches from "../Watches/Watches";
import Iphones from "../Iphones/Iphones";
import "./App.css";

const App = () => (
  <Router>
    <Switch>
      <Route path="/watches">
        <Watches />
      </Route>
      <Route path="/iphones">
        <Iphones />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
