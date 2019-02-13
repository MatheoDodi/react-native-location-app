import React, { Component } from 'react';
import { View, Text, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';

class FindPlace extends Component {
  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get('window').width / Dimensions.get('window').height) *
        0.0122
    },
    locationChosen: false
  };

  handlePickLocation = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => ({
      focusedLocation: {
        ...prevState.focusedLocation,
        latitude: coords.latitude,
        longitude: coords.longitude
      },
      locationChosen: true
    }));
  };

  handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }
        };
        this.handlePickLocation(coordsEvent);
      },
      err => {
        console.log(err);
      }
    );
    console.log(this.state);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={{ width: '100%', height: 300 }}
          onPress={this.handlePickLocation}
          ref={ref => (this.map = ref)}
        >
          {this.state.locationChosen && (
            <MapView.Marker coordinate={this.state.focusedLocation} />
          )}
        </MapView>
        <Button onPress={this.handleGetLocation} title="Find Me" />
      </View>
    );
  }
}

export default FindPlace;
