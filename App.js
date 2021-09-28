
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Counter from './Nav/Counter';
import HelloWorld from './Nav/HelloWorld';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Counter"
          component={Counter} 
        />
        <Stack.Screen
          name="Hello World"
          component={HelloWorld}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
