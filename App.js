import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

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
        <TextInput
          style={{ width: 300, borderColor: 'black', borderBottomWidth: 1 }}
          value={this.state.placeName}
          onChangeText={this.handleChangePlaceName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
