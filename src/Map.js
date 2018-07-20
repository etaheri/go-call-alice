import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

import "./Map.css";

import MAP_STYLE from "./style.json";

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapElement = React.createRef();
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
      }
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeMap);
    this.resizeMap();
  }

  resizeMap = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: this.mapElement.current.offsetWidth,
        height: this.mapElement.current.offsetHeight
      }
    });
  };

  render() {
    return (
      <div className="map" ref={this.mapElement}>
        <ReactMapGL
          {...this.state.viewport}
          mapStyle={MAP_STYLE}
          mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
          onViewportChange={() => this.resizeMap}
        />
      </div>
    );
  }
}

export default Map;
