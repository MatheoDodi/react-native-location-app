import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
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
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={{ width: '100%', height: 300 }}
        />
        <Text>inside FindPlace</Text>
      </View>
    );
  }
}

export default FindPlace;
