import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Auth extends Component {
  render() {
    return (
      <View>
        <Text>Welcome, please log in!</Text>
        <Button title="Login" />
      </View>
    );
  }
}

export default Auth;
