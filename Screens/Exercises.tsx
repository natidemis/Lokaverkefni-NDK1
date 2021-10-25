import { ImageBackground, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';
import { dummySession } from '../data/fakedata';
import { Session as SessionComponent } from '../components/session/Session';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';

//const image = require('../Images/gym.jpg')
const ExerciseScreen = () => {
    const data = dummySession; // TODO tengja við alvöru gögn gegnum "database" kall

    return (
      <React.Fragment>
        <BackgroundImage>
          <Text style={styles.text}>Exercises</Text>
          <StatusBar style="auto" />      
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default ExerciseScreen