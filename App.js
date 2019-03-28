/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import MainActivity from './src/activity/MainActivity';


const store = configureStore()
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainActivity/>
      </Provider>

    );
  }
}