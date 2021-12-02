import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';

import { Exercise } from '../components/exercise/Exercise';
;
import { BackgroundContext } from '../BackgroundContext';
import { StorageContext } from '../data/DataProvider';
const ExerciseScreen = () => {
    //TODO: save exercise
    const {exercises} = useContext(StorageContext).exerciseVariables
    const {BackgroundImage} = useContext(BackgroundContext)
    return (
      <>
        <BackgroundImage>
          <Exercise exercises={exercises} />
          <StatusBar style="auto" />      
        </BackgroundImage>
      </>
    );
  }

export default ExerciseScreen