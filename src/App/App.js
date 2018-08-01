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
import Home from "./../Home/Home.js";
import Venue from "./../Venue/Venue.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.data = {
      locations: [
        {
          slug: "cleveland-baseball",
          name: "Cleveland Baseball",
          latitude: 41.496211,
          longitude: -81.6852289,
          issues: [
            {
              title: "Printer Not Working",
              date: "Wed, August 1, 2018",
              description: "Lorum Ipsum",
              latitude: 41.496211,
              longitude: -81.6852289,
              status: "OPEN",
              comments: [],
              history: []
            }
          ]
        },
        {
          slug: "minnesota-baseball",
          name: "Minnesota Baseball",
          latitude: 44.9813578,
          longitude: -93.2801042,
          issues: []
        }
      ]
    };
  }
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
            <Route exact path="/" render={() => <Home data={this.data} />} />
            <Route
              path="/venue/:venue"
              render={() => <Venue data={this.data} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
