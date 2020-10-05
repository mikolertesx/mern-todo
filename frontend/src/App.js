import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/store";

import {
  HashRouter,
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import {
  HomePage,
  connectedLoginPage as LoginPage,
  connectedRegisterPage as RegisterPage,
  connectedToDoPage as TodoPage,
} from "./pages";

function App() {
  const Router =
    +process.env.REACT_APP_ASFILE === 1 ? HashRouter : BrowserRouter;

  return (
    <div className="App">
      <Provider store={Store}>
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
            <Route exact={false} path="/todos">
              <TodoPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
