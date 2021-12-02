
import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import styles from './Styles';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Tabs';
import { initStorage } from './data/Datastorage/datastorage';
import { BackgroundContext } from './BackgroundContext';
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage';
import { TExercise, TSession, TTemplate } from './data/types';

export default function App() {
  const [history, setHistory] = useState<TSession[]>(null)
  const [allTemplates, setAllTemplates] = useState<TTemplate[]>(null);
  const [exercises, setExercises] = useState<TExercise[]>(null);
  useEffect(() => {
    const setup = async () => {
      await initStorage();
    }

    setup();
  },[])
  return (
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
  )
}
