import { Button, Text, View, ImageBackground} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React, { useEffect, useState } from 'react';
import { Session } from '../components/session/Session';
import {dummyTemplate } from '../data/fakedata';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import TemplateView from '../components/Template/Template';
import {TTemplate } from '../data/types';
import ConfettiCannon from 'react-native-confetti-cannon';

const Sessions = () => {
    const [activeTemplate, setActiveTemplate] = useState<TTemplate | null>(null);
    const [isSessionActive, setSessionActivityState] = useState<boolean>(false);
    const [shootConfetti, setShootConfetti] = useState<boolean>(false);
    const templates: TTemplate[] = [
      dummyTemplate('template 1'),
      dummyTemplate('template 2'),
      dummyTemplate('template 3'),
    ];

    useEffect(() => {
      const timer = setTimeout(() => {
        setShootConfetti(false)
      },3500)

      return () => clearTimeout(timer)
    }, [shootConfetti])


    return (
      <React.Fragment>
        <BackgroundImage>
          <TemplateView 
            templates={templates}
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
      </React.Fragment>
    );
  }

export default Sessions