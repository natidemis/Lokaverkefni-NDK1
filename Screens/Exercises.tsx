import { ImageBackground, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';

const image = {uri: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxUTlJNb1dGVmdFc3x8ZW58MHx8fHw%3D&w=1000&q=80'} /*require('../Images/tigerMarks.jpg')*/
const ExerciseScreen = () => { 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Exercises</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

export default ExerciseScreen