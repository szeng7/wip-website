import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainPage from "./pages/main.jsx";
import CookingPage from "./pages/cooking.jsx";
import CodingPage from "./pages/coding.jsx";
import RecipePage from "./pages/recipe.jsx";
import NotFoundPage from "./pages/404.jsx";
import WIPPage from "./pages/wip.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/cooking" component={CookingPage} />
          <Route exact path="/coding" component={CodingPage} />
          <Route exact path="/recipe" component={RecipePage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/wip" component={WIPPage} />
          <Redirect to="./404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
