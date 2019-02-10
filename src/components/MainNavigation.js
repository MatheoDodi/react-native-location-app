import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Auth from '../screens/Auth';
import FindPlace from '../screens/FindPlace';
import SharePlace from '../screens/SharePlace';
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
    screen: SharePlace,
    navigationOptions: {
      title: 'Share Place'
    }
  }
});

export const StackNavigator = createStackNavigator({
  Main: {
    screen: TabNav,
    navigationOptions: {
      headerTitleStyle: {
        color: '#6755A8'
      },
      headerStyle: {
        backgroundColor: 'transparent'
      }
    }
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
    initialRouteName: 'Authenticate'
  }
);
