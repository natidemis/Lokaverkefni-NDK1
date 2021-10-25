
import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native'
import styles from './Styles';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Tabs';
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage';
const image = require('./Images/gym.jpg')

export default function App() {
  return (

      <View style={styles.container}>
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
      </View>
  )
}
