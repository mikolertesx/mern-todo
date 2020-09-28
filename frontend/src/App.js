import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import { authStore } from "./store/reducers/auth";

// Page-Components.
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="App">
      <Provider store={authStore}>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/todos">
              <p>Todos section</p>
            </Route>
            <Redirect to="/login" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
