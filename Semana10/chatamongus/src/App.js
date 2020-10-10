import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';

import {BrowserRouter as Router, Route} from "react-router-dom";
export default function App() {
  return (
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/Chat" exact component={Chat} />
      </Router>
  )
}

