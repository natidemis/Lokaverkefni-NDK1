import React, { useContext, useState } from "react"
import { ListRenderItemInfo, Pressable, TouchableHighlight, View, Text, TextInput} from "react-native"
import { sessionStyle } from "./SessionStyle"
import { EvilIcons } from '@expo/vector-icons';
import { TSet, TTemplate } from "../../data/types";
import styles from "../../Styles";
import { data } from "./Session";
import { Animations } from "../Misc/animations";
import { templateModalStyle } from "../Template/TemplateStyles";
import { DataContext } from "./DataContext";

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
  

  const {data, setData} = useContext(DataContext) 
  const [color, setColor] = useState<{weights: string, kg: string}>({weights: 'grey', kg: 'grey'})
  const [inputWeight, setInputWeight] = useState<string>(set.weight)
  const [inputReps, setInputReps] = useState<string>(set.reps)
  const [{prevWeights, prevReps}] = useState({prevWeights: set.weight, prevReps: set.reps})
  return(
    <TouchableHighlight style={sessionStyle.exerciseSetStyle}>
      <React.Fragment>
        <View style= {sessionStyle.rowIdView}>
          <Text style={sessionStyle.rowId}>{set.id + 1}</Text>
        </View>
        <PreviousSet prevWeights={prevWeights} prevReps={prevReps}></PreviousSet>
        <TextInput
          style= {[sessionStyle.setInput,{color: color.weights} ]}
          keyboardType='numeric'
          onChangeText={text => {
            data.info[exerciseRowIndex].exercise.sets[set.id].weight = text
            setData(data)
            setInputWeight(text)
            color.weights = 'black'
            setColor(color)
          }}
          value= {inputWeight}
       />
       <TextInput
         style= {[sessionStyle.setInput,color.kg? {color: 'grey'} : null]}
         keyboardType='numeric'
         onChangeText={text => {
          data.info[exerciseRowIndex].exercise.sets[set.id].reps = text
          setData(data)
          setInputReps(text)
          color.kg = 'black'
          setColor(color)
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