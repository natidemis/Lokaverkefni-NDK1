
import React, { useEffect } from 'react';
import { View } from 'react-native'
import styles from './Styles';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Tabs';
import { initStorage } from './data/Datastorage/datastorage';
const image = require('./Images/gym.jpg')

export default function App() {
  useEffect(() => {
    initStorage();
  },[])
  return (

      <View style={styles.container}>
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
      </View>
  )
}
