import React, { Component } from "react";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import { Link } from "react-router-dom";
import MapPin from "./map-pin";

import "./Map.css";

import MAP_STYLE from "./style.json";

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapElement = React.createRef();
    console.log(props.latitude, props.longitude);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: props.latitude ? props.latitude : 40,
        longitude: props.longitude ? props.longitude : -100,
        zoom: props.zoom ? props.zoom : 3.5
      },
      popupInfo: null
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.resizeMap(this.state.viewport)
    );
    this.resizeMap(this.state.viewport);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.latitude !== this.state.viewport.longitude) {
      this.resizeMap(this.state.viewport);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      this.resizeMap(this.state.viewport)
    );
  }

  resizeMap = viewport => {
    this.setState({
      viewport: {
        ...viewport,
        width: this.mapElement.current
          ? this.mapElement.current.offsetWidth
          : 500
      }
    });
  };

  renderLocationMarker = (latitude, longitude) => {
    return (
      <Marker key={`marker`} longitude={latitude} latitude={longitude}>
        <MapPin size={40} color={"red"} />
      </Marker>
    );
  };

  render() {
    const { locations } = this.props;
    return (
      <div className="map" ref={this.mapElement}>
        <ReactMapGL
          {...this.state.viewport}
          mapStyle={MAP_STYLE}
          mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
          onViewportChange={this.resizeMap}
        >
          {this.renderLocationMarker(0, 0)}
          <div className="nav">
            <NavigationControl onViewportChange={this.resizeMap} />
          </div>
          <MapPin />
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
