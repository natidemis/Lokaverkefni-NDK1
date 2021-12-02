import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React, { useContext, useEffect, useState } from 'react';
import HistoryComponent from '../components/history/History';
import { dummySession } from '../data/fakedata';
import { TSession } from '../data/types';
import { fetchData, keys } from '../data/Datastorage/datastorage';
import { BackgroundContext } from '../BackgroundContext';

const sessions = [dummySession, dummySession]
const HistoryScreen = () => {
    const {BackgroundImage} = useContext(BackgroundContext)
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
        {console.log('history  renderin')}
        <BackgroundImage>
          <HistoryComponent history={history}/>
          <StatusBar style="auto" />      
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default HistoryScreen