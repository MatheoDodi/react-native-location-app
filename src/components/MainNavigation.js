import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import App from '../../App';
import Auth from '../screens/Auth';
import FindPlace from '../screens/FindPlace';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

const TabNav = createBottomTabNavigator({
  FindPlace: {
    screen: FindPlace,
    navigationOptions: {
      title: 'Hello',
      tabBarLabel: 'Find Place',
      tabBarIcon: () => <Icon name="ios-search" color="black" size={24} />
    }
  },
  SharePlace: {
    screen: App,
    navigationOptions: {
      title: 'Share Place'
    }
  }
});

export const StackNavigator = createStackNavigator({
  Main: {
    screen: TabNav
  }
});

export const MainNavigator = createSwitchNavigator(
  {
    Home: {
      screen: StackNavigator
    },
    Authenticate: {
      screen: Auth
    }
  },
  {
    initialRouteName: 'Home'
  }
);
