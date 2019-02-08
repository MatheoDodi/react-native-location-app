import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from './src/components/styles';

import PlaceInput from './src/components/PlaceInput';
import ListPlaces from './src/components/ListPlaces';
import placeImage from './src/assets/images/beautiful-place.jpg';
import PlaceDetail from './src/components/PlaceDetails';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  handleAddPlace = place => {
    const { places } = this.state;
    const newPlaces = [
      ...places,
      { key: Math.random(), name: place, image: placeImage }
    ];

    this.setState({ places: newPlaces });
  };

  handleSeleceItem = id => {
    const selectedPlace = this.state.places.find(place => id === place.key);

    this.setState({ selectedPlace });
    // const { places } = this.state;
    // const filteredPlaces = places.filter(place => place.key !== id);
    // this.setState({ places: filteredPlaces });
  };

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <PlaceDetail selectedPlace={this.state.selectedPlace} />
          <PlaceInput addPlace={this.handleAddPlace} />
          <ListPlaces
            places={this.state.places}
            selectItem={id => this.handleSeleceItem(id)}
          />
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
