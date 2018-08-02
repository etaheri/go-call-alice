import React, { Component } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";

import { Dialog, Icon, ButtonGroup, Button } from "@blueprintjs/core";

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
    const { match } = this.props;
    const venue = this.props.data.venues.find(function(location) {
      return location.slug === match.params.venue;
    });
    const { issues } = venue ? venue : null;
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
              <ButtonGroup style={{ minWidth: 200, marginBottom: "20px" }}>
                <Button icon="small-tick">Complete</Button>
                <Button icon="disable">Close</Button>
              </ButtonGroup>
              <h3 className="bp3-heading">{issue.summary}</h3>
              <p className="bp3-heading">
                <em>Status:</em> {issue.status}
              </p>
              <p>Created: {issue.date}</p>
              <p>{issue.description}</p>
              <Timeline>
                <TimelineEvent
                  title="Issue was created"
                  createdAt="2018-08-01 7:06 PM"
                  icon={<Icon name="redo" />}
                />
                <TimelineEvent
                  title="Jon Doe begin progress"
                  createdAt="2018-08-01 7:15 PM"
                  icon={<Icon name="redo" />}
                />
                <TimelineEvent
                  title="Jon Doe added a comment"
                  createdAt="2018-08-01 7:18 PM"
                  icon={<Icon name="redo" />}
                />
              </Timeline>,
            </div>
          ) : null}
        </Dialog>
        <div className="map-container">
          <Map
            latitude={venue.latitude}
            longitude={venue.longitude}
            locations={issues.map(issue => ({
              name: issue.summary,
              latitude: venue.locations[issue.location].latitude,
              longitude: venue.locations[issue.location].longitude
            }))}
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
                  <Icon className="issue-icon" icon="error" />
                  <h5 className="bp3-heading issue-name">{issue.summary}</h5>
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
