import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "25%", height: "50%" }}
        zoom={10}
        initialCenter={{ lat: 30.574301, lng: 78.323158 }}
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAGyr2r4yxz6UbMALPOTg6bk6n2p7Mum5U",
})(MapContainer);
