import React, { useEffect, useState } from "react";
import { ExerciseType, TExercise } from "../../data/types";
import { Pressable, Text, View } from "react-native";
import styles from "../../Styles";
import { AlphabetList } from "react-native-section-alphabet-list";
import { ExercisesWkey } from "../session/Session";
import { ExerciseStyles } from "./ExerciseStyle";
import { NewExerciseButton } from "./ExerciseComponents";

type ExercisesUnwrapped = {
  value: string,
  key: string
  
}
export function Exercise({ exercises }: { exercises: TExercise[] }) {
  const data = exercises.map((exercise,i) => (
    {
      value: `${exercise.title}(${exercise.type})`,
      key: `${i}`
    }
  ))

  return (
    <View style={ExerciseStyles.container}>
      <View style={ExerciseStyles.modalView}>
        <NewExerciseButton/>
        <AlphabetList
          style={ExerciseStyles.alphabetList}
          data={data} 
          indexLetterStyle= {{
            color: 'lightblue', 
            fontSize: 12,
          }}
          renderCustomItem={
            (item) => (
              <Pressable
              style={ExerciseStyles.textView}
              onPress={() => {
                console.log('component2',data[0])
                //TODO: create new set on click.
                //activeTemplate is used to begin a session. Passed to Workout.tsx for the <Session> component.
                console.log('pressed')
              }}
             >
              <Text style={ExerciseStyles.text}>{item.value}</Text>
            </Pressable>
            )
          }
          renderCustomSectionHeader={
            (section) => (
              <View style={ExerciseStyles.titleView}>
                <Text style={ExerciseStyles.title}>{section.title}</Text>
              </View>
              )
          }
        />
      </View>
    </View>
  )
}
