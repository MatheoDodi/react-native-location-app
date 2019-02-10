import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';
import PlaceInput from '../components/PlaceInput';
import { addPlace } from '../store/actions';

class SharePlace extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <PlaceInput addPlace={place => this.props.onAddPlace(place)} />
        {this.props.places &&
          this.props.places.map(place => <Text>{place.name}</Text>)}
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
