import React, { useEffect, useState } from "react";
import { ExerciseType, TExercise } from "../../data/types";
import { Pressable, Text, View } from "react-native";
import styles from "../../Styles";
import { AlphabetList } from "react-native-section-alphabet-list";
import { ExercisesWkey } from "../session/Session";
import { ExerciseStyles } from "./ExerciseStyle";
import { NewExerciseButton, SearchBar } from "./ExerciseComponents";
import filter from 'lodash.filter';
type ExercisesUnwrapped = {
  value: string,
  key: string
  
}
export type DataProptype = {
  value: string,
  key: string,
}
export function Exercise({ exercises }: { exercises: TExercise[] }) {
  const [query, setQuery] = useState<string>("")
  const data: DataProptype[] = exercises.map((exercise,i) => (
    {
      value: `${exercise.title}(${exercise.type})`,
      key: `${i}`
    }
  ))
  const [list, setList] = useState<DataProptype[]>(data)

 
  return (
    <View style={ExerciseStyles.container}>
      <View style={ExerciseStyles.modalView}>
        {/**<NewExerciseButton/>**/}
        <View style={{width: '105%'}}>
          <SearchBar query={query} setQuery={setQuery} data={data} setData={setList}/>
        </View>
        <AlphabetList
          style={ExerciseStyles.alphabetList}
          data={list} 
          indexLetterStyle= {{
            color: 'lightblue', 
            fontSize: 12,
          }}
          renderCustomItem={
            (item) => (
              <Pressable
              style={ExerciseStyles.textView}
              onPress={() => {
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
        <View style={{width: '105%', top: 10}}>
          <NewExerciseButton/>
        </View>
      </View>
    </View>
  )
}
