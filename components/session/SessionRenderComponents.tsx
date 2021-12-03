import React, { useContext, useEffect, useState } from "react"
import { ListRenderItemInfo, Pressable, TouchableHighlight, View, Text, TextInput} from "react-native"
import { sessionStyle } from "./SessionStyle"
import { EvilIcons } from '@expo/vector-icons';
import { TSet, TTemplate } from "../../data/types";
import styles from "../../Styles";
import { data } from "./Session";
import { Animations } from "../Misc/animations";
import { templateModalStyle } from "../Template/TemplateStyles";
import { DataContext } from "./DataContext";
import { StorageContext } from "../../data/DataProvider";
import getCurrentDate from "../../utils/date";

export const SessionHiddenButton = () => {
  return(
    <View style= {sessionStyle.hiddenButtonView}>
      <Pressable
        style={[sessionStyle.hiddenButton]}
        onPress={() => { 
        }}
      >
        <EvilIcons style={{fontWeight: 'bold'}} name="trash" size={24} color="black" />
      </Pressable>
    </View>
  )
}




type Props = {
  set: TSet, 
  exerciseRowIndex: number,
}
export function SetRow( {set, exerciseRowIndex}: Props){
  

  const {data, setData, isSessionActive} = useContext(DataContext) 

  const [inputWeight, setInputWeight] = useState<string>(set.weight)
  const [inputReps, setInputReps] = useState<string>(set.reps)
  const [{prevWeights, prevReps}] = useState({prevWeights: set.weight, prevReps: set.reps})
  useEffect(() => {
    setInputWeight(set.weight)
    setInputReps(set.reps)
    },[isSessionActive])
  return(
    <TouchableHighlight style={sessionStyle.exerciseSetStyle}>
      <React.Fragment>
        <View style= {sessionStyle.rowIdView}>
          <Text style={sessionStyle.rowId}>{set.id + 1}</Text>
        </View>
        <PreviousSet prevWeights={prevWeights} prevReps={prevReps}></PreviousSet>
        <TextInput
          style= {[sessionStyle.setInput]}
          keyboardType='numeric'
          placeholder={prevWeights}
          onChangeText={text => {
            data.info[exerciseRowIndex].exercise.sets[set.id].weight = text
            setData(data)
            setInputWeight(text)
          }}
          value= {inputWeight}
       />
       <TextInput
         style= {[sessionStyle.setInput]}
         keyboardType='numeric'
         placeholder={prevReps}
         onChangeText={text => {
          data.info[exerciseRowIndex].exercise.sets[set.id].reps = text
          setData(data)
          setInputReps(text)
        }}
         value= {inputReps}
        />
      </React.Fragment>
      
    </TouchableHighlight>
  )
}



function PreviousSet({prevWeights, prevReps}: {prevWeights: string, prevReps: string}){
  if(prevWeights && prevReps){
    return (
      <View style={sessionStyle.prevTextView}>
        <Text
          style={[styles.text, sessionStyle.prevText]}>
            {prevWeights}kg × {prevReps}
          </Text>
      </View>
    )
  }else{
    return (
      <View style={[sessionStyle.prevTextView,{marginRight: '40%'}]}>
        <Text></Text>
      </View>
    )
  }
}

type BtnProps = {
  setAnimation: React.Dispatch<React.SetStateAction<Animations>>,
  setSessionActivityState: React.Dispatch<React.SetStateAction<boolean>>,
  setShootConfetti: React.Dispatch<React.SetStateAction<boolean>>,
  data: TTemplate,
  modalVisible: Boolean
}

export const SessionButtons = ( { setAnimation, setSessionActivityState, setShootConfetti, data, modalVisible}: BtnProps) => {
  const {saveExercise, saveSession} = useContext(StorageContext).exerciseVariables
  const {saveTemplate} = useContext(StorageContext).templateVariables
  return(
    <View style={sessionStyle.buttonsView} onLayout={
      () => {
        setAnimation(Animations.slide)
      }
    }>
      <Pressable
              style={[templateModalStyle.button, templateModalStyle.buttonStart]}
              onPress={() => {
                //activeTemplate is used to begin a session. Passed to Workout.tsx for the <Session> component.
                //TODO: SAVE when finished.
                setSessionActivityState(!modalVisible);
                setShootConfetti(true);
                data.info.map((item) => {
                  saveExercise(item.exercise)
                })
                saveSession(
                  {
                    title: data.title,
                    date: getCurrentDate(),
                    duration: 'HH:mm:ss',
                    info: [...data.info]
                  }
                )
                saveTemplate(data)
              }}
             >
              <Text style={sessionStyle.textStyle}>Finish</Text>
      </Pressable>
      <Pressable
              style={[sessionStyle.button, sessionStyle.buttonClose]}
              onPress={() => { 
                setSessionActivityState(!modalVisible);
              }}
            >
              <Text style={templateModalStyle.textStyle}>Cancel</Text>
      </Pressable>
    </View>
  )
}