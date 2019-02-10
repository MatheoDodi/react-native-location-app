import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import bImage from '../assets/images/background.png';
import {
  LoginButtonWrapper,
  StatusBarMargin,
  LoginButtonText,
  SignupButtonWrapper,
  SignupButtonText,
  AuthScreenContainer
} from '../components/styles';

class Auth extends Component {
  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={bImage}
      >
        <AuthScreenContainer>
          <StatusBarMargin />
          <Text>Welcome, please log in!</Text>
          <TouchableOpacity>
            <LoginButtonWrapper>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButtonWrapper>
          </TouchableOpacity>
          <TouchableOpacity>
            <SignupButtonWrapper>
              <SignupButtonText>Signup</SignupButtonText>
            </SignupButtonWrapper>
          </TouchableOpacity>
        </AuthScreenContainer>
      </ImageBackground>
    );
  }
}

export default Auth;
