import { ImageBackground, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React, { useContext, useEffect, useState } from 'react';
import { dummyExercises, dummySession } from '../data/fakedata';
import { Session as SessionComponent } from '../components/session/Session';
import { Exercise } from '../components/exercise/Exercise';
import { TExercise } from '../data/types';
import { fetchData, keys } from '../data/Datastorage/datastorage';
import { BackgroundContext } from '../BackgroundContext';
const ExerciseScreen = () => {
    const [exercises, setExercises] = useState<TExercise[] | null>(null);
    const {BackgroundImage} = useContext(BackgroundContext)
    useEffect(()=>{
      const getData = async () => {
        const result: TExercise = await fetchData(keys.ALLEXERCISES)
        let data:TExercise[] = []
        for(let [_, value] of Object.entries(result)){
          //@ts-ignore
          data.push(value)
        }
        setExercises(data)
      }
      getData()
    },[])
    return (
      <>
        <BackgroundImage>
          {exercises? <Exercise exercises={exercises} /> : null}
          <StatusBar style="auto" />      
        </BackgroundImage>
      </>
    );
  }

export default ExerciseScreen