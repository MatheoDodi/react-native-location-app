import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Row, SearchButton, Input } from './components/styles';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  handleChangePlaceName = value => {
    this.setState({ placeName: value });
  };

  // Displays new input on button tap
  handlePlaceSubmit = () => {
    const { placeName, places } = this.state;
    const newPlaces = [...places, placeName]; // add input to the places array

    this.setState({ places: newPlaces, placeName: '' });
  };

  render() {
    const { placeName, places } = this.state;

    return (
      <View style={styles.container}>
        <Row>
          <Input
            style={{ borderColor: 'black', borderBottomWidth: 1 }}
            value={placeName}
            onChangeText={this.handleChangePlaceName}
            placeholder="Search for an awesome place"
          />
          <SearchButton onPress={this.handlePlaceSubmit} title="Add" />
        </Row>
        {places.length > 0 &&
          places.map(place => <Text key={place}>{place}</Text>)}
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
