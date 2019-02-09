import App from '../../App';
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
      title: 'Find Place'
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
        title: 'Home',
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
        title: 'Auth'
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
);
