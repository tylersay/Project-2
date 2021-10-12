import React from "react";
import { GlobalStyle } from "./GlobalStyle";

import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
require('dotenv').config()

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      Start here!
      <Route path="/:movieID">
        <Movie />
      </Route>
      <Route path="/*">
        <NotFound />
      </Route>
    </Switch>
    <GlobalStyle />
  </Router>
);

export default App;
