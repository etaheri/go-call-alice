import React, { Component } from "react";
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch
} from "@blueprintjs/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// STYLES
import "./App.css";

// Components
import Home from "./Home.js";
import Venue from "./Venue.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Ask Alice</NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="home" text="Home" />
          </NavbarGroup>
        </Navbar>
        <Router>
          <div className="page-container">
            <Route exact path="/" component={Home} />
            <Route path="/venue/:venue-name" component={Venue} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
