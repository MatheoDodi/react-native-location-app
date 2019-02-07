import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Row, SearchButton, Input } from './components/styles';

export default class App extends Component {
  state = {
    placeName: ''
  };

  handleChangePlaceName = value => {
    this.setState({ placeName: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Row>
          <Input
            style={{ borderColor: 'black', borderBottomWidth: 1 }}
            value={this.state.placeName}
            onChangeText={this.handleChangePlaceName}
            placeholder="Search for an awesome place"
          />
          <SearchButton title="Add" />
        </Row>
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
