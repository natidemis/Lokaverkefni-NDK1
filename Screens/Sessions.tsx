import { Button, Text, View, ImageBackground} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';
import { Session } from '../components/session/Session';
import { dummySession } from '../data/fakedata';
import { BackgroundImage } from '../App';
const Sessions = () => {
  const image = require('../Images/gym.jpg')
    return (
      <React.Fragment>
        <BackgroundImage>
          <Text style={styles.text}>Welcome to sessions!</Text>
          <Session session={dummySession}></Session>
          <StatusBar style="auto" />
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default Sessions