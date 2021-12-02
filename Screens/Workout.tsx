import { Button, Text, View, ImageBackground} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { Session } from '../components/session/Session';
import TemplateView from '../components/Template/Template';
import {TTemplate } from '../data/types';
import ConfettiCannon from 'react-native-confetti-cannon';
import { BackgroundContext } from '../BackgroundContext';
import { StorageContext } from '../data/DataProvider';

const Sessions = () => {
    const [activeTemplate, setActiveTemplate] = useState<TTemplate | null>(null);
    const [isSessionActive, setSessionActivityState] = useState<boolean>(false);
    const [shootConfetti, setShootConfetti] = useState<boolean>(false);
    const {BackgroundImage} = useContext(BackgroundContext)
    
    const {allTemplates} = useContext(StorageContext).templateVariables

    useEffect(() => {
      const timer = setTimeout(() => {
        setShootConfetti(false)
      },3500)

      return () => clearTimeout(timer)
    }, [shootConfetti])


    return (
      <>
        {allTemplates ? 
          <BackgroundImage>
            <TemplateView 
              templates={allTemplates}
              setActiveTemplateForWorkout={setActiveTemplate}
              setSessionModalVisible={setSessionActivityState}
              />
            <Session 
              modalVisible= {isSessionActive}
              template={activeTemplate}
              setSessionActivityState={setSessionActivityState}
              setShootConfetti={setShootConfetti}
            />
            <StatusBar style="auto" />
            {shootConfetti ? 
              (<ConfettiCannon count={200} origin={{x: -10, y: 0}}/>) : null}
          </BackgroundImage>
      : null}
      </>
    );
  }

export default Sessions