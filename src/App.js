import Navbar from "./Components/layout/Navbar";
import Home from "./Components/pages/Home";
import User from "./Components/users/User";
import NotFound from "./Components/pages/NotFound";
import Alert from "./Components/layout/Alert";
import About from "./Components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="container">
            <Navbar></Navbar>
            <hr />
            <Alert />
            <Switch>
              <Route exact path="/" render={(props) => <Home />} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => <User {...props} />}
              />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
