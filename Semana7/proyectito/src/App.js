import React from "react";
import Routes from "./routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import CarritoContextProvider from "./context/carritoContext";
import AuthContextProvider from "./context/authContext";
import Navigation from "./components/Navigation";

export default function App() {

  return (
    <Router>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </Router>
  );
}
