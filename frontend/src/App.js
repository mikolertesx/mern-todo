import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home/";

function App() {
  const Router =
    +process.env.REACT_APP_ASFILE === 1 ? HashRouter : BrowserRouter;

  return <div className="App">
    <Router>
      <HomePage />
    </Router>
  </div>;
}

export default App;
