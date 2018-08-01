import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@blueprintjs/core";

import Map from "./../Map/Map.js";
// STYLES
import "./Venue.css";

class VenuePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      issue: null
    };
  }

  openIssueDialog = issue => {
    this.setState({ dialogOpen: true, issue: issue });
  };

  closeIssueDialog = () => {
    this.setState({ dialogOpen: false, issue: null });
  };

  render() {
    const location = this.props.data.locations[0];
    const { issues } = this.props.data.locations[0];
    const { issue } = this.state;
    if (!issues) return null;
    return (
      <div className="venue">
        <Dialog
          isOpen={this.state.dialogOpen}
          onClose={this.closeIssueDialog}
          title={"Issue"}
        >
          {issue ? (
            <div className="dialog-body">
              <h3 class="bp3-heading">{issue.title}</h3>
              <p>{issue.date}</p>
              <p>{issue.description}</p>
            </div>
          ) : null}
        </Dialog>
        <div className="map-container">
          <Map
            latitude={location.latitude}
            longitude={location.longitude}
            locations={issues}
            zoom={17}
          />
        </div>
        <div className="issue-list">
          <ul>
            {issues.map(issue => (
              <li className="issue-item">
                <a
                  className="issue-content"
                  onClick={() => this.openIssueDialog(issue)}
                >
                  <h5 className="bp3-heading issue-name">{issue.title}</h5>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default VenuePage;
