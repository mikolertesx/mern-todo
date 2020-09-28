import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Page-Components.
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/" exact={true}>
            <p>Home</p>
          </Route>
          <Redirect to="register" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
