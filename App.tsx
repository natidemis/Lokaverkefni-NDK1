
import React from 'react';
import { ImageBackground, Image, Text, View } from 'react-native'
import styles from './Styles';

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';
const image = {uri: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxUTlJNb1dGVmdFc3x8ZW58MHx8fHw%3D&w=1000&q=80'} /*require('../Images/tigerMarks.jpg')*/

export default function App() {
  return (

      <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <NavigationContainer>
              <Tabs/>
            </NavigationContainer>
          </ImageBackground>
      </View>


    
  )
}
