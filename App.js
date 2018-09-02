/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MainActivity from './src/activity/MainActivity';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import Navigator from './src/activity/Navigator'


const store = configureStore()
export default class App extends Component {
  render() {
    return (
      //<Provider store={store}>
        <View style={{flex:1,backgroundColor:'black'}}>
          <Text>sdf</Text>
        </View>
      //</Provider>

    );
  }
}