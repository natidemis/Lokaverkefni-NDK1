import { ImageBackground, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React, { useEffect, useState } from 'react';
import { dummyExercises, dummySession } from '../data/fakedata';
import { Session as SessionComponent } from '../components/session/Session';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import { Exercise } from '../components/exercise/Exercise';
import { TExercise } from '../data/types';
import { fetchExercises } from '../data/Datastorage/datastorage';
//const image = require('../Images/gym.jpg')
const ExerciseScreen = () => {
    const [exercises, setExercises] = useState<TExercise[] | null>(null);

    useEffect(()=>{
      const getData = async () => {
        const result: TExercise = await fetchExercises()
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