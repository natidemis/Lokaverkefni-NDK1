import {ImageBackground, Button, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';

const image = require('../Images/gym.jpg')

const HistoryScreen = () => {
    return (
      <React.Fragment>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>History</Text>
          <StatusBar style="auto" />      
        </ImageBackground>
      </React.Fragment>
    );
  }

export default HistoryScreen