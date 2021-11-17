
import React from 'react';
import { View } from 'react-native'
import styles from './Styles';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Tabs';
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
