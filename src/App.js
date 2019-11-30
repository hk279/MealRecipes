import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Nav"
import Home from "./components/Home"
import Browse from "./components/Browse"
import About from "./components/About"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchWord: ""
    };
  }

  callbackFunction = (childData) => {
    this.setState({searchWord: childData})
    console.log(this.state.searchWord)
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation parentCallback = {this.callbackFunction} />
          <Switch>
            <Route path="/" exact>
              <Home search = {this.state.searchWord} />
            </Route>
            <Route path="/browse">
              <Browse />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
