import React, { Component } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';
import bImage from '../assets/images/background.png';
import logoImage from '../assets/images/logo.png';
import {
  LoginButtonWrapper,
  StatusBarMargin,
  LoginButtonText,
  SignupButtonWrapper,
  SignupButtonText,
  AuthScreenContainer,
  Logo
} from '../components/styles';
import AuthInput from '../components/AuthInput/AuthInput';

class Auth extends Component {
  state = {
    usernameValue: '',
    passwordValue: '',
    showLoginInput: false,
    logInSubmit: false,
    scaleAnim: new Animated.Value(1),
    opacAnime: new Animated.Value(1),
    validationError: ''
  };

  navigateToHome = () => {
    this.props.navigation.navigate('Home');
  };

  handleInputChange = (property, value) => {
    this.setState({ [property]: value });
  };

  handleTapButton = () => {
    if (this.state.showLoginInput) {
      if (!this.state.usernameValue && !this.state.passwordValue) {
        this.setState({
          validationError: `Username and Password fields can't be empty`
        });
      } else if (this.state.usernameValue && !this.state.passwordValue) {
        this.setState({
          validationError: `Password field can't be empty`
        });
      } else if (!this.state.usernameValue && this.state.passwordValue) {
        this.setState({
          validationError: `Username field can't be empty`
        });
      } else {
        this.setState({ validationError: '' });
        const credentials = {
          username: this.state.usernameValue,
          password: this.state.passwordValue
        };

        this.props.onUserLogin(credentials, this.navigateToHome);
      }
    } else {
      Animated.parallel([
        Animated.timing(this.state.scaleAnim, {
          toValue: 2.25,
          duration: 800,
          useNativeDriver: true
        }),
        Animated.timing(this.state.opacAnime, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        })
      ]).start(() => this.setState({ showLoginInput: true }));
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.Image
          style={{
            ...animatedStyles.backgroundImage,
            transform: [
              { scaleX: this.state.scaleAnim },
              { scaleY: this.state.scaleAnim }
            ]
          }}
          source={bImage}
        />
        <AuthScreenContainer>
          <StatusBarMargin />
          <Animated.View
            style={{
              opacity: this.state.opacAnime
            }}
          >
            <Logo source={logoImage} resizeMode="contain" />
          </Animated.View>
          {this.state.showLoginInput && (
            <AuthInput
              error={this.state.validationError || this.props.error}
              position={220}
              placeholder="Username"
              value={this.state.usernameValue}
              changeValue={value =>
                this.handleInputChange('usernameValue', value)
              }
            />
          )}
          {this.state.showLoginInput && (
            <AuthInput
              position={280}
              secure={true}
              placeholder="Password"
              value={this.state.passwordValue}
              changeValue={value =>
                this.handleInputChange('passwordValue', value)
              }
            />
          )}
          <TouchableOpacity onPress={this.handleTapButton}>
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

const mapStateToProps = state => {
  const { loggedIn, authUser, error } = state.auth;
  return {
    loggedIn,
    authUser,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  onUserLogin: (credentials, navigation) =>
    dispatch(loginUser(credentials, navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

const animatedStyles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
});
