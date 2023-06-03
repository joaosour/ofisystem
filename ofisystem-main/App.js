import React from 'react'
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1D1238" barStyle={"light-content"}/>
      <Routes/>
    </NavigationContainer>
  );
}


