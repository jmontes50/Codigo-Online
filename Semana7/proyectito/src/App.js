import React from "react";
import Routes from "./routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
