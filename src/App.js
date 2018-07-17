import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import Home from "./Home.js";
import Map from "./Map.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  <Link to="/map">Map</Link>
                </li>
              </ul>
              <hr />
              <Route exact path="/" component={Home} />
              <Route path="/map" component={Map} />
            </div>
          </Router>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
