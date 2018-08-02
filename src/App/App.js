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
  Switch,
  Dialog,
  FormGroup,
  InputGroup,
  HTMLSelect,
  TextArea
} from "@blueprintjs/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// STYLES
import "./App.css";

// Components
import Home from "./../Home/Home.js";
import Venue from "./../Venue/Venue.js";
import SmallMap from "../SmallMap/Map.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        venues: [
          {
            slug: "cleveland-baseball",
            name: "Cleveland Baseball",
            latitude: 41.496211,
            longitude: -81.6852289,
            locations: {
              "brews-and-brats": {
                name: "Brews and Brats",
                latitude: 41.4968,
                longitude: -81.6852289
              },
              "lotso-natcho": {
                name: "Lotso Natcho",
                latitude: 41.496211,
                longitude: -81.6859
              }
            },
            issues: [
              {
                summary: "Printer Not Working",
                priority: "HIGH",
                status: "Fix In Progress",
                date: "Wed, August 1, 2018",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus, tortor ut iaculis elementum, magna tortor feugiat justo, sed luctus eros erat sed elit. Quisque imperdiet ante non venenatis consectetur. Suspendisse potenti. Etiam tortor urna, tempus sit amet posuere placerat, hendrerit eu leo. Maecenas tincidunt sodales lectus, eu lobortis neque interdum a. Sed dignissim ipsum id nisi pretium vulputate. Aenean iaculis scelerisque mauris, eget congue urna accumsan varius. Sed at magna et felis convallis gravida. Nullam vestibulum cursus risus. Mauris placerat ante metus, bibendum rhoncus eros congue sit amet. Praesent dignissim posuere mauris ut malesuada. Pellentesque molestie nisi vel luctus varius.",
                location: "brews-and-brats",
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
      },
      addIssueDialogOpen: false,
      issueData: {
        venueSlug: null,
        venue: null,
        priority: null,
        summary: null,
        description: null,
        latitude: null,
        longitude: null
      }
    };
  }

  openNewIssueDialog = () => {
    this.setState({ addIssueDialogOpen: true });
  };

  closeNewIssueDialog = () => {
    this.setState({ addIssueDialogOpen: false });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Ask Alice</NavbarHeading>
              <NavbarDivider />
              <Link to="/">
                <Button className={Classes.MINIMAL} icon="home" text="Home" />
              </Link>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
              <Button
                className={Classes.MINIMAL}
                icon="plus"
                text="New Issue"
                onClick={this.openNewIssueDialog}
              />
            </NavbarGroup>
          </Navbar>
          <div className="page-container">
            <Dialog
              isOpen={this.state.addIssueDialogOpen}
              title="New Issue"
              onClose={this.closeNewIssueDialog}
            >
              <div className="dialog-body">
                <form
                  onSubmit={e => {
                    console.log(this.state.issueData);
                    e.preventDefault();
                    this.closeNewIssueDialog();
                  }}
                >
                  <FormGroup
                    label="Location"
                    labelFor="location-input"
                    labelInfo="(required)"
                  >
                    <HTMLSelect
                      id="location-input"
                      placeholder="Venue summary"
                      options={[
                        { label: "Select", value: "" },
                        ...this.state.data.venues.map(location => ({
                          label: location.name,
                          value: location.slug
                        }))
                      ]}
                      onChange={e => {
                        let location = this.state.data.venues.find(
                          location => location.slug === e.target.value
                        );
                        console.log(location);
                        this.setState({
                          issueData: {
                            ...this.state.issueData,
                            venueSlug: e.target.value,
                            venue: location,
                            latitude: location.latitude,
                            longitude: location.longitude
                          }
                        });
                      }}
                      value={this.state.issueData.venueSlug}
                    />
                  </FormGroup>
                  <FormGroup
                    label="Priority"
                    labelFor="priority-input"
                    labelInfo="(required)"
                  >
                    <HTMLSelect
                      id="location-input"
                      placeholder="Issue summary"
                      options={[
                        { label: "Select", value: "" },
                        {
                          label: "High",
                          value: "HIGH"
                        },
                        {
                          label: "Medium",
                          value: "MEDIUM"
                        },
                        {
                          label: "Low",
                          value: "LOW"
                        }
                      ]}
                      onChange={e => {
                        this.setState({
                          issueData: {
                            ...this.state.issueData,
                            priority: e.target.value
                          }
                        });
                      }}
                      value={this.state.issueData.priority}
                    />
                  </FormGroup>
                  <FormGroup
                    label="Summary"
                    labelFor="summary-input"
                    labelInfo="(required)"
                  >
                    <InputGroup
                      id="summary-input"
                      placeholder="Issue summary"
                      onChange={e => {
                        this.setState({
                          issueData: {
                            ...this.state.issueData,
                            summary: e.target.value
                          }
                        });
                      }}
                      value={this.state.issueData.summary}
                    />
                  </FormGroup>
                  <FormGroup
                    label="Description"
                    labelFor="description-input"
                    labelInfo="(required)"
                  >
                    <TextArea
                      id="description-input"
                      placeholder="Issue description"
                      type="text-area"
                      onChange={e => {
                        this.setState({
                          issueData: {
                            ...this.state.issueData,
                            description: e.target.value
                          }
                        });
                      }}
                      value={this.state.issueData.description}
                    />
                  </FormGroup>
                  <FormGroup
                    label="location"
                    labelFor="location-input"
                    labelInfo="(required)"
                  >
                    <HTMLSelect
                      id="location-input"
                      placeholder="Issue summary"
                      options={[
                        { label: "Select", value: "" },
                        ...Object.keys(this.state.data.venues[0].locations).map(
                          location => ({
                            label: this.state.data.venues[0].locations[location]
                              .name,
                            value: location
                          })
                        )
                      ]}
                      onChange={e => {
                        this.setState({
                          issueData: {
                            ...this.state.issueData,
                            location: e.target.value
                          }
                        });
                      }}
                      value={this.state.issueData.priority}
                    />
                  </FormGroup>
                  <Button
                    text="Create Issue"
                    type="submit"
                    onClick={this.createIssue}
                  />
                </form>
              </div>
            </Dialog>
            <Route
              exact
              path="/"
              render={props => <Home data={this.state.data} {...props} />}
            />
            <Route
              path="/venue/:venue"
              render={props => <Venue data={this.state.data} {...props} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
