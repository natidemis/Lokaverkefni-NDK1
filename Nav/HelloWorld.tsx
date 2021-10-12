import { Button, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';

const HelloWorld = () => {
    return (
      <View style={styles.container}>
        <Text>Hello, World!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

export default HelloWorld