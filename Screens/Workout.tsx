import { Button, Text, View, ImageBackground} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React, { useState } from 'react';
import { Session } from '../components/session/Session';
import {dummyTemplate } from '../data/fakedata';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import TemplateView from '../components/Template/Template';
import {TTemplate } from '../data/types';

const Sessions = () => {
    const [activeTemplate, setActiveTemplate] = useState<TTemplate | null>(null);
    const [isSessionActive, setSessionActivityState] = useState<boolean>(false);
    const templates: TTemplate[] = [
      dummyTemplate('template 1'),
      dummyTemplate('template 2'),
      dummyTemplate('template 3'),
    ];

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
          />
          <StatusBar style="auto" />
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default Sessions