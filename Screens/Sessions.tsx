import { Button, Text, View, ImageBackground} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';
import { Session } from '../components/session/Session';
import {dummyTemplate, dummySession } from '../data/fakedata';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import { Template } from '../components/Template/Template';
import { TTemplate } from '../data/types';

const Sessions = () => {
    const templates: TTemplate[] = [dummyTemplate,dummyTemplate];
    console.log(templates.length)
    return (
      <React.Fragment>
        <BackgroundImage>
          <Template templates={templates}></Template>
          <StatusBar style="auto" />
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default Sessions