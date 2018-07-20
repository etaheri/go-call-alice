import React, { Component } from "react";
import { Link } from "react-router-dom";

import Map from "./Map.js";
// STYLES
import "./Home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // get data
    // fetch('URI')
    // .then(res)

    // parse to json

    // set to state

    const data = { hello: "world" };
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    if (!data) return null;
    return (
      <div className="dashboard">
        <div className="map-container">
          <Map />
        </div>
        <div className="venue-list">
          <ul>
            <li className="venue-item">
              <Link className="venue-content" to="#">
                <h5 className="bp3-heading venue-name">Cleveland Baseball</h5>
                <h6 className="bp3-heading issue-count">H5 heading</h6>
              </Link>
            </li>
            <li className="venue-item">
              <Link className="venue-content" to="#">
                <h5 className="bp3-heading venue-name">Cleveland Baseball</h5>
                <h6 className="bp3-heading issue-count">H5 heading</h6>
              </Link>
            </li>
            <li className="venue-item">
              <Link className="venue-content" to="#">
                <h5 className="bp3-heading venue-name">Cleveland Baseball</h5>
                <h6 className="bp3-heading issue-count">H5 heading</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
