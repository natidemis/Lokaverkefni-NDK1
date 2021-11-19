
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, FontAwesome  } from '@expo/vector-icons';
import ExerciseScreen from './Screens/Exercises';
import HistoryScreen from './Screens/History';
import Sessions from './Screens/Workout';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    var inactiveTintColor = 'darkgray';
    var activeTintColor = 'black'
  return (
      <Tab.Navigator
          initialRouteName={'Workout'}
          screenOptions={{
              tabBarStyle:{
                  position: 'absolute',
                  bottom: 25,
                  left: 20,
                  right: 20,
                  elevation: 0,
                  backgroundColor: '#ffffff',
                  borderRadius: 15,
                  height: 90,
              },
          }}
      >
        <Tab.Screen 
          name="Exercise"
          component={ExerciseScreen}
          options={{
              tabBarIcon: (props) => <Ionicons name='ios-barbell' size={props.size*1.5} color={props.color}/>,
              tabBarActiveTintColor: activeTintColor,
              tabBarInactiveTintColor: inactiveTintColor
          }}
        />
        <Tab.Screen
          name="Workout"
          component={Sessions}
          options={{
              tabBarIcon: ({focused, color, size}) => {
                  return <AntDesign name={focused ? 'pluscircle' : 'pluscircleo'} size={size*1.4} color={color}/>
              },
              tabBarActiveTintColor: activeTintColor,
              tabBarInactiveTintColor: inactiveTintColor
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options= {{
              tabBarIcon: (props) => <FontAwesome name="history" size={24} color={props.color} />,
              tabBarActiveTintColor: activeTintColor,
              tabBarInactiveTintColor: inactiveTintColor
          }}
        />
      </Tab.Navigator>
    );
}

export default Tabs
