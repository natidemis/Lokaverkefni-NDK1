import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React, { useEffect, useState } from 'react';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import HistoryComponent from '../components/history/History';
import { dummySession } from '../data/fakedata';
import { TSession } from '../data/types';
import { fetchData, keys } from '../data/Datastorage/datastorage';

const sessions = [dummySession, dummySession]
const HistoryScreen = () => {
    const [history, setHistory] = useState<TSession[]>(null)
    useEffect(()=>{
      const getData = async () => {
        const result: TSession[] = await fetchData(keys.HISTORY)
        setHistory(result)
      }
      getData();
    },[])
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