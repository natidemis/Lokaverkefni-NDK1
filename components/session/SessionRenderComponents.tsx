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
  info: {
    set: TSet, 
    exerciseRowIndex: number,
  }
}
export function SetRow( {info}: Props){
  
  const {set, exerciseRowIndex} = info
  const {data, setData} = useContext(DataContext) 
  const [color, setColor] = useState<{weights: string, kg: string}>({weights: 'grey', kg: 'grey'})
  const [inputWeight, setInputWeight] = useState<string>(
    data.exercises[exerciseRowIndex].sets[set.id].previousKG)
  const [inputReps, setInputReps] = useState<string>(
    data.exercises[exerciseRowIndex].sets[set.id].previousREPS
  )
  return(
    <TouchableHighlight style={sessionStyle.exerciseSetStyle}>
      <React.Fragment>
        <View style= {sessionStyle.rowIdView}>
          <Text style={sessionStyle.rowId}>{set.id}</Text>
        </View>
        <PreviousSet set={set}></PreviousSet>
        <TextInput
          style= {[sessionStyle.setInput,{color: color.weights} ]}
          keyboardType='numeric'
          onChangeText={text => {
            data.exercises[exerciseRowIndex].sets[set.id].weight = text
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
          data.exercises[exerciseRowIndex].sets[set.id].reps = text
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



function PreviousSet({set}: {set: TSet}){
  if(set.previousKG !== null && set.previousREPS !== null){
    return (
      <View style={sessionStyle.prevTextView}>
        <Text
          style={[styles.text, sessionStyle.prevText]}>
            {set.previousKG}kg × {set.previousREPS}
          </Text>
      </View>
    )
  }else{
    return <Text></Text>
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
                console.log(data)
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