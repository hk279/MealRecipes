import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Nav"
import Home from "./components/Home"
import Browse from "./components/Browse"

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/news">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
