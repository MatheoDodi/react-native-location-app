import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import { MainNavigator } from './src/components/MainNavigation';

import configureStore from './src/store/configureStore';

const store = configureStore();

const MainApp = createAppContainer(MainNavigator);

const RNRedux = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
