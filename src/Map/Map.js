import React, { Component } from "react";
import ReactMapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
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

  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      this.resizeMap(this.state.viewport)
    );
  }

  resizeMap = viewport => {
    this.setState({
      viewport: {
        ...viewport,
        width: this.mapElement.current.offsetWidth,
        height: this.mapElement.current.offsetHeight
      }
    });
  };

  renderLocationMarker = (item, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={item.longitude}
        latitude={item.latitude}
      >
        <MapPin
          size={40}
          onClick={() => this.setState({ popupInfo: item })}
          color={item.issues && item.issues.length > 0 ? "red" : "#00c574"}
        />
      </Marker>
    );
  };

  /**
   * Render the popup associated with the location
   */
  renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          onClose={() => this.setState({ popupInfo: null })}
          key={`popup-${popupInfo.name}`}
        >
          <h3 class="bp3-heading">{popupInfo.name}</h3>
          <Link to={`/venues/${popupInfo.name}`}>Details</Link>
        </Popup>
      )
    );
  }

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
          {this.renderPopup()}
          {locations ? locations.map(this.renderLocationMarker) : null}
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
