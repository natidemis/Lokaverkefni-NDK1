import { ImageBackground, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';
import { dummySession } from '../data/fakedata';
import { Session as SessionComponent } from '../components/session/Session';


const image = require('../Images/gym.jpg')
const ExerciseScreen = () => {
    const data = dummySession; // TODO tengja við alvöru gögn gegnum "database" kall

    return (
      <React.Fragment>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Exercises</Text>
          <StatusBar style="auto" />      
        </ImageBackground>
      </React.Fragment>
    );
  }

export default ExerciseScreen