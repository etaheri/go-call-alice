import React, { Component } from "react";
import { Link } from "react-router-dom";

import Map from "./../Map/Map.js";
// STYLES
import "./Home.css";

class HomePage extends Component {
  render() {
    const { locations } = this.props.data;
    if (!locations) return null;
    return (
      <div className="dashboard">
        <div className="map-container">
          <Map locations={locations} />
        </div>
        <div className="venue-list">
          <ul>
            {locations.map(location => (
              <li className="venue-item">
                <Link className="venue-content" to={`venue/${location.slug}`}>
                  <h5 className="bp3-heading venue-name">{location.name}</h5>
                  <h6
                    className="bp3-heading issue-count"
                    style={
                      location.issues.length
                        ? { color: "red" }
                        : { color: "#00c574" }
                    }
                  >
                    {location.issues.length} Issues
                  </h6>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
