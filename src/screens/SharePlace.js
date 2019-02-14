import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';

import PickImage from '../components/PickImage';
import PickLocation from './PickLocation';
import { handleAddPlace } from '../store/actions';

class SharePlace extends Component {
  state = {
    inputValue: '',
    userLocation: null,
    image: ''
  };

  handleInputChange = value => {
    this.setState({ inputValue: value });
  };

  handleUploadButton = () => {
    const place = {
      placeName: this.state.inputValue
    };
    this.props.onAddPlace(place, this.state.userLocation, this.state.image);
  };

  handleGetUserLocation = userLocation => {
    this.setState({ userLocation });
  };

  handleGetImage = image => {
    this.setState({ image });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          value={this.state.inputValue}
          onChangeText={this.handleInputChange}
          style={{ width: 300 }}
        />
        <PickLocation
          getLocation={userLocation => this.handleGetUserLocation(userLocation)}
        />
        <PickImage getImage={image => this.handleGetImage(image)} />
        <Button onPress={this.handleUploadButton} title="Upload" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { places, selectedPlace } = state.places;

  return {
    places,
    selectedPlace
  };
};

const mapDispatchToProps = dispatch => ({
  onAddPlace: (place, location, image) =>
    dispatch(handleAddPlace(place, location, image))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlace);
