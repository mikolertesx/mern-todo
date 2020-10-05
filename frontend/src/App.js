import React from "react";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { HomePage, LoginPage, RegisterPage, TodoPage } from "./pages";

function App() {
  const Router =
    +process.env.REACT_APP_ASFILE === 1 ? HashRouter : BrowserRouter;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <HomePage />
          </Route>
          <Route exact={true} path="/login">
            <LoginPage />
          </Route>
          <Route exact={true} path="/register">
            <RegisterPage />
          </Route>
          <Route exact={false} path="/todo">
            <TodoPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
