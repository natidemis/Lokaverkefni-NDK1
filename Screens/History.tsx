import { Button, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';

const HistoryScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>History</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

export default HistoryScreen