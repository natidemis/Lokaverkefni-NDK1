import React, { useState } from "react";
import { TextInput, View, Text, Pressable, ListRenderItemInfo, Touchable, TouchableHighlight } from "react-native";
import { TExercise, TSet } from "../../data/types";
import styles from "../../Styles";
import { sessionStyle } from "./SessionStyle";
import { SwipeListView } from 'react-native-swipe-list-view';
import { templateModalStyle, templateStyle } from "../Template/TemplateStyles";

function PreviousSet({set}: {set: TSet}){
  if(set.previousKG !== null && set.previousREPS !== null){
    return <Text style={[styles.text, sessionStyle.prevText]}>{set.previousKG} × {set.previousREPS}</Text>
  }else{
    return <Text></Text>
  }
}
function SetRow( { set }: {set: ListRenderItemInfo<TSetWithId>}){
    const [inputKG, setInputKG] = React.useState<string>();
    const [inputReps, setInputReps] = React.useState<string>()
    return(
      <TouchableHighlight style={sessionStyle.exerciseSetStyle}>
        <React.Fragment>
          <View>
            <Text style={sessionStyle.rowId}>{set.index}</Text>
          </View>
          <PreviousSet set={set.item.data}></PreviousSet>
          <TextInput
            style= {sessionStyle.setInput}
            keyboardType='numeric'
            onChangeText={setInputKG}
            value= {inputKG}
         />
         <TextInput
           style= {sessionStyle.setInput}
           keyboardType='numeric'
           onChangeText={setInputReps}
           value= {inputReps}
          />
        </React.Fragment>
      </TouchableHighlight>
    )
  }
  
  function Header(){
    return(
      <View style= {sessionStyle.exerciseHeaderStyle}>
        <Text style={styles.title}>Set</Text>
        <Text style={styles.title}>Previous</Text>
        <Text style={styles.title}>kg</Text>
        <Text style={styles.title}>Reps</Text>
      </View>
    )
  }
  
  type TSetWithId = {data: TSet, key: number}
  export default function ExcerciseRow( { Exercise }: { Exercise: TExercise}){
    const [exerciseSets, setExerciseSets] = useState<TSetWithId[]>(
      Exercise.sets.map((set,i) => (
        {
          data: set,
          key: i
        }
      ))
    )
    return(
      <React.Fragment>
        <Text style={styles.title}>{Exercise.title}</Text>
        <Header/>
         <View>
          {/*Exercise.sets.map((set, i) => {
            return(
              <SetRow set={set} key={i} rowID={i}/>

            )
          }) */}
          <SwipeListView
            data={exerciseSets}
            renderItem={(data, rowMap) => {
              return (
                  <TouchableHighlight>
                    <SetRow set={data} />
                  </TouchableHighlight>
              )
            }}
            renderHiddenItem={(data, rowMap) => {
              return(
                <Pressable
                  style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                  onPress={() => { 
                  }}
                >
                  <Text style={templateModalStyle.textStyle}>Close</Text>
                </Pressable>
              )
            }}
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
                <Text style={sessionStyle.textStyle}>+ add set</Text>
              </Pressable>
        </View>
      </React.Fragment>
    )
  }