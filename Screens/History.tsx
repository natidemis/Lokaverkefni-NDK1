import {ImageBackground, Button, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import HistoryComponent from '../components/history/History';
import { dummySession } from '../data/fakedata';
const image = require('../Images/gym.jpg')

const sessions = [dummySession]
const HistoryScreen = () => {
    return (
      <React.Fragment>
        <BackgroundImage>
          <Text style={styles.text}>History</Text>
          <HistoryComponent sessions={sessions}/>
          <StatusBar style="auto" />      
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default HistoryScreen