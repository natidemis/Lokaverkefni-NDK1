
import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import styles from './Styles';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Tabs';
import { initStorage } from './data/Datastorage/setup';
import { BackgroundContext } from './BackgroundContext';
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage';
import { DataContextProvider } from './data/DataProvider';

export default function App() {
  useEffect(() => {
    const setup = async () => {
      await initStorage();
    }

    setup();
  },[])
  return (
    <DataContextProvider>
      <BackgroundContext.Provider 
        value={
          {BackgroundImage: BackgroundImage}
        }
      >
        <View style={styles.container}>
          <NavigationContainer>
              <Tabs/>
          </NavigationContainer>
        </View>
      </BackgroundContext.Provider>
    </DataContextProvider>
  )
}
