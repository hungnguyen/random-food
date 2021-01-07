import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Food from "./Food";

const MasterPage = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/category">
            <Category />
          </Route>
          <Route exact path="/food/:categoryId">
            <Food />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default MasterPage;
