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
import TodoPage from "./pages/todos";

function App() {
  console.log(process.env);

  return (
    <div className="App">
      <Provider store={authStore}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/todos">
              <TodoPage />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
