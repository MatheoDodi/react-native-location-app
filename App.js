import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Row, SearchButton, Input, Container } from './src/components/styles';

import PlaceInput from './src/components/PlaceInput';
import ListPlaces from './src/components/ListPlaces';

export default class App extends Component {
  state = {
    places: []
  };

  handleAddPlace = place => {
    const { places } = this.state;
    const newPlaces = [...places, place];

    this.setState({ places: newPlaces });
  };

  handleDeletePlace = id => {
    const { places } = this.state;
    const filteredPlaces = places.filter((place, index) => index !== id);

    this.setState({ places: filteredPlaces });
  };

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <PlaceInput addPlace={this.handleAddPlace} />
          <ListPlaces
            places={this.state.places}
            deletePlace={id => this.handleDeletePlace(id)}
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
