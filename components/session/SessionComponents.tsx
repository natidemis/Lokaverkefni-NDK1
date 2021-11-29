import React, { useState } from "react";
import { View, Text, Pressable, TouchableHighlight, TextInput, ListRenderItemInfo } from "react-native";
import { TExercise, TSet } from "../../data/types";
import styles from "../../Styles";
import { sessionStyle } from "./SessionStyle";
import { SwipeListView } from 'react-native-swipe-list-view';
import { PreviousSet, SessionHiddenButton, SetRow, TSetWithId } from "./SessionRenderComponents";


  
  const Header = () => {
    return(
      <View style= {sessionStyle.exerciseHeaderStyle}>
        <Text style={styles.title}>Set</Text>
        <Text style={styles.title}>Previous</Text>
        <Text style={styles.title}>kg</Text>
        <Text style={styles.title}>Reps</Text>
      </View>
    )
  }

  type Props = { exerciseSets: TSetWithId[], title: string}

  export default function ExcerciseRow( { exerciseSets, title }: Props){
  
    return(
      <React.Fragment>
        <Text style={styles.title}>{title}</Text>
        <Header/>
         <View>

          <SwipeListView
            style={{width:'100%'}}
            data={exerciseSets}
            renderItem={(data, rowMap) => {
              return (
                  <TouchableHighlight>
                    <SetRow set={data} />
                  </TouchableHighlight>
              )}}
            renderHiddenItem={SessionHiddenButton}
            leftOpenValue={75}
            rightOpenValue={-150}
            />

        </View> 
        <View style={sessionStyle.setButtonsView}>
          <Pressable
            style={[sessionStyle.setButton]}
            onPress={() => {
              //TODO: create new set on click.
              //activeTemplate is used to begin a session. Passed to Workout.tsx for the <Session> component.
            }}
           >
            <Text style={sessionStyle.textStyle}>+ set</Text>
          </Pressable>
        </View>
      </React.Fragment>
    )
  }