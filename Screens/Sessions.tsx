import { Button, Text, View, ImageBackground} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';
import React from 'react';
import { Session } from '../components/session/Session';
import {dummyTemplate, dummySession } from '../data/fakedata';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import TemplateView from '../components/Template/Template';
import { TTemplate } from '../data/types';

const Sessions = () => {
    const templates: TTemplate[] = [
      dummyTemplate,
      dummyTemplate,
      dummyTemplate,
    ];

    return (
      <React.Fragment>
        <BackgroundImage>
          <TemplateView templates={templates}></TemplateView>
          <StatusBar style="auto" />
        </BackgroundImage>
      </React.Fragment>
    );
  }

export default Sessions