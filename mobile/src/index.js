import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import App from './App';

export default function index() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#a9131e" />
      <App />
    </NavigationContainer>
  );
}
