import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import PickImage from '../components/PickImage';
import PickLocation from './PickLocation';
import { addPlace } from '../store/actions';

class SharePlace extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <PickLocation />
        <PickImage />
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
  onAddPlace: place => dispatch(addPlace(place))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePlace);
