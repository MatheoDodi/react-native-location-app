import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Auth from '../screens/Auth';
import FindPlace from '../screens/FindPlace';
import SharePlace from '../screens/SharePlace';
import {
  createStackNavigator,
  createBottomTabNavigator
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

export const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNav,
      navigationOptions: {
        headerTitleStyle: {
          color: '#6755A8'
        },
        headerStyle: {
          backgroundColor: 'transparent'
        }
      }
    },
    Authenticate: {
      screen: Auth,
      navigationOptions: {
        title: 'Auth',
        header: null
      }
    }
  },
  {
    initialRouteName: 'Authenticate'
  }
);
