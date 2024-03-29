import React, { useContext, useEffect, useState } from "react";
import { View, Text, Pressable, TouchableHighlight } from "react-native";
import { TExercise, TSet, TTemplate } from "../../data/types";
import styles from "../../Styles";
import { sessionStyle } from "./SessionStyle";
import { SwipeListView } from 'react-native-swipe-list-view';
import { SessionHiddenButton, SetRow } from "./SessionRenderComponents";
import { data } from "./Session";
import { DataContext, DataProps } from "./DataContext";


  
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
}
type Props = {
  Exercise: TExercise,
  exerciseRowIndex: number,
}
export default function ExcerciseRow( { Exercise, exerciseRowIndex}:Props){
  const {data,setData, isFinished, isSessionActive} = useContext<DataProps>(DataContext)
  const [setList, updateSetList] = useState<TSet[]>([...data.info[exerciseRowIndex].exercise.sets])
  const numSets = data.info[exerciseRowIndex].numSets - data.info[exerciseRowIndex].exercise.sets.length
  useEffect(() => {
    updateSetList([...data.info[exerciseRowIndex].exercise.sets])
    for(var i = 0; i < numSets;i++){
      setList.push(
        {
          weight: "",
          reps: "",
          id: setList.length
        }
      )
    }
  },[isSessionActive])
  useEffect(()=> {
    if(isFinished)
      data.info[exerciseRowIndex].exercise.sets = setList
      setData(data)
  },[isFinished])
  console.log(setList)
  return(
    <>
      <Text style={styles.title}>{Exercise.title}</Text>
      <Header/>
       <View>
        <SwipeListView
          style={{width:'100%'}}
          data={setList.sort((a:TSet,b:TSet) => a.id-b.id)} //sort the sets by ID
          keyExtractor={item => item.id.toString()}
          renderItem={(content) => {
            return (
                <TouchableHighlight>
                  <SetRow set={content.item} 
                    exerciseRowIndex={exerciseRowIndex}
                  />
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
            setList.push(
              {
                weight: "",
                reps: "",
                id: setList.length
              }
            )
            updateSetList(setList)
          }}
         >
          <Text style={sessionStyle.textStyle}>+ set</Text>
        </Pressable>
      </View>
    </>
  )
}