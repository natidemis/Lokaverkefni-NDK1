import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React, { useContext, useEffect, useState } from 'react';
import HistoryComponent from '../components/history/History';
import { TSession } from '../data/types';
import { keys } from '../data/Datastorage/setup';
import { BackgroundContext } from '../BackgroundContext';
import { fetchData } from '../data/Datastorage/datastorage';
import { StorageContext } from '../data/DataProvider';

const HistoryScreen = () => {
    const {BackgroundImage} = useContext(BackgroundContext)
    const {history} = useContext(StorageContext).historyVariables

    return (
      <React.Fragment>
        <BackgroundImage>
          <HistoryComponent history={history}/>
          <StatusBar style="auto" />      
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default HistoryScreen