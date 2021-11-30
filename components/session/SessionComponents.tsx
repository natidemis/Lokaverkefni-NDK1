import React, { useState } from "react";
import { View, Text, Pressable, TouchableHighlight } from "react-native";
import { TExercise, TSet, TTemplate } from "../../data/types";
import styles from "../../Styles";
import { sessionStyle } from "./SessionStyle";
import { SwipeListView } from 'react-native-swipe-list-view';
import { SessionHiddenButton, SetRow } from "./SessionRenderComponents";
import { data } from "./Session";


  
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

type TSetWithId = {
  data: {
    set: TSet, 
    exerciseRowIndex: number,
  }, 
  key: string
}
type Props = {
  Exercise: TExercise,
  exerciseRowIndex: number,
}
export default function ExcerciseRow( { Exercise, exerciseRowIndex}:Props){
  const [exerciseSets, _] = useState<TSetWithId[]>(
    Exercise.sets.map((set: TSet) => (
      {
        data: {
          set: set, 
          exerciseRowIndex: exerciseRowIndex,
        },
        key: `${set.id}`
      }
    ))
  )
  return(
    <>
      <Text style={styles.title}>{Exercise.title}</Text>
      <Header/>
       <View>
        <SwipeListView
          style={{width:'100%'}}
          data={exerciseSets}
          renderItem={(content) => {
            return (
                <TouchableHighlight>
                  <SetRow info={content.item.data}/>
                </TouchableHighlight>
            )}
          }
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
    </>
  )
}