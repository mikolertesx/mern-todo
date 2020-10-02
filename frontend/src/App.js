import React from "react";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/Home/";
import LoginPage from "./pages/Login/";

function App() {
  const Router =
    +process.env.REACT_APP_ASFILE === 1 ? HashRouter : BrowserRouter;

  return (
    <div className="App">
      <Router>
        <Route exact={true} path="/">
          <HomePage />
        </Route>
        <Route exact={true} path="/login">
          <LoginPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
