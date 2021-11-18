import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import HistoryComponent from '../components/history/History';
import { dummySession } from '../data/fakedata';

const sessions = [dummySession, dummySession]
const HistoryScreen = () => {
    return (
      <React.Fragment>
        <BackgroundImage>
          <HistoryComponent sessions={sessions}/>
          <StatusBar style="auto" />      
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default HistoryScreen