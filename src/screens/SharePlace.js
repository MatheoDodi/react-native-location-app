import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

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
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center' }}>Location Name</Text>
        <TextInput
          value={this.state.inputValue}
          onChangeText={this.handleInputChange}
          style={{
            width: 300,
            alignSelf: 'center',
            padding: 10,
            margin: 30,
            backgroundColor: '#D5D5D5'
          }}
        />
        <PickLocation
          getLocation={userLocation => this.handleGetUserLocation(userLocation)}
        />
        <PickImage getImage={image => this.handleGetImage(image)} />
        <Button
          style={{ marginTop: 40 }}
          onPress={this.handleUploadButton}
          title="Upload"
        />
      </ScrollView>
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
