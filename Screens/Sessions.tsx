import { Button, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';

const Sessions = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to sessions!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

export default Sessions