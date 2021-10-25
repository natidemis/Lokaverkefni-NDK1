import {ImageBackground, Button, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
const image = require('../Images/gym.jpg')

const HistoryScreen = () => {
    return (
      <React.Fragment>
        <BackgroundImage>
          <Text style={styles.text}>History</Text>
          <StatusBar style="auto" />      
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default HistoryScreen