import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// import Components from "views/Components/Components.js";
import HomePage from "views/HomePage/HomePage.js";
import History from "views/ProfilePage/ProfilePage";
// import LoginPage from "views/LoginPage/LoginPage.js";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/history" component={History} />
      <Route path="/" component={HomePage} />
      {/*<Route path="/login-page" component={LoginPage} />*/}
      {/*<Route path="/components" component={Components} />*/}
    </Switch>
  </Router>,
  document.getElementById("root")
);
