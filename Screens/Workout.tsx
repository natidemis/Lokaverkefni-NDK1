import { Button, Text, View, ImageBackground} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React, { useContext, useEffect, useState } from 'react';
import { Session } from '../components/session/Session';
import {dummyTemplate } from '../data/fakedata';
import TemplateView from '../components/Template/Template';
import {TTemplate } from '../data/types';
import ConfettiCannon from 'react-native-confetti-cannon';
import { fetchData, keys } from '../data/Datastorage/datastorage';
import { BackgroundContext } from '../BackgroundContext';

const dt = dummyTemplate('dummy')
const Sessions = () => {
    const [activeTemplate, setActiveTemplate] = useState<TTemplate | null>(null);
    const [isSessionActive, setSessionActivityState] = useState<boolean>(false);
    const [shootConfetti, setShootConfetti] = useState<boolean>(false);
    const [allTemplates, setAllTemplates] = useState<TTemplate[] | null>(null);
    const {BackgroundImage} = useContext(BackgroundContext)
    
    useEffect(() => {
      const getData = async () => {
        const templates = await fetchData(keys.TEMPLATES)
        setAllTemplates(templates)
      }
      getData()
    },[])
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