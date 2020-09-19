import React from "react";
import Routes from "./routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import CarritoContextProvider from "./context/carritoContext";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Router>
      <CarritoContextProvider>
        <div>
          <Navigation />
          <div className="container">
            <Switch>
              <Routes />
            </Switch>
          </div>
        </div>
      </CarritoContextProvider>
    </Router>
  );
}
