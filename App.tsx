
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Counter from './Nav/Counter';
import HelloWorld from './Nav/HelloWorld';
import Sessions from './Nav/Sessions';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Counter"
          component={Counter} 
        />
        <Tab.Screen
          name="Hello World"
          component={HelloWorld}
        />
        <Tab.Screen
          name="Sessions"
          component={Sessions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
