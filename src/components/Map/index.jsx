import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { API_KEY } from '../../env';


const mapStyles = {
  width: '93%',
  height: '90%',
  marginTop: '7px',
};

class MapContainer extends Component {

    state = { 
  
        showingInfoWindow: false,
        
        activeMarker: {},
        
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };

  render() {
      const {lat, lng } = this.props.coords;
      const { name } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: lat,
            lng: lng
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={name}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);