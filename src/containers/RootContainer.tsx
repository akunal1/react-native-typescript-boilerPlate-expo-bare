import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
//TODO: Remove from prod
import DemoScreen from '../screens/demo/DemoScreen';

class RootContainer extends Component {
  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <SafeAreaView />
        <StatusBar barStyle="dark-content" />
        <DemoScreen />
      </View>
    );
  }
}

export default RootContainer;
