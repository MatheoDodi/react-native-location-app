import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import bImage from '../assets/images/background.png';
import logoImage from '../assets/images/logo.png';
import {
  LoginButtonWrapper,
  StatusBarMargin,
  LoginButtonText,
  SignupButtonWrapper,
  SignupButtonText,
  AuthScreenContainer,
  Logo,
  BackgroundImage
} from '../components/styles';

class Auth extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BackgroundImage resizeMode="cover" source={bImage} />
        <AuthScreenContainer>
          <StatusBarMargin />
          <Logo source={logoImage} resizeMode="contain" />
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
      </View>
    );
  }
}

export default Auth;
