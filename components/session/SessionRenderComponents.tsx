import React, { useState } from "react"
import { ListRenderItemInfo, Pressable, TouchableHighlight, View, Text, TextInput} from "react-native"
import { sessionStyle } from "./SessionStyle"
import { EvilIcons } from '@expo/vector-icons';
import { TSet, TTemplate } from "../../data/types";
import styles from "../../Styles";
import { data } from "./Session";


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
  data: {
    set: TSet, 
    idx: number, 
    inputData: TTemplate 
    setInputData: React.Dispatch<React.SetStateAction<TTemplate>>,
    exerciseRowIndex: number,
  }
}
export function SetRow( {data}: Props){
  const {set, idx, inputData, setInputData, exerciseRowIndex} = data
  const [color, setColor] = useState<{weights: string, kg: string}>({weights: 'grey', kg: 'grey'})
  const [inputWeight, setInputWeight] = useState<string>(
    inputData.exercises[exerciseRowIndex].sets[idx].previousKG)
  const [inputReps, setInputReps] = useState<string>(
    inputData.exercises[exerciseRowIndex].sets[idx].previousREPS
  )
  return(
    <TouchableHighlight style={sessionStyle.exerciseSetStyle}>
      <React.Fragment>
        <View style= {sessionStyle.rowIdView}>
          <Text style={sessionStyle.rowId}>{idx}</Text>
        </View>
        <PreviousSet set={set}></PreviousSet>
        <TextInput
          style= {[sessionStyle.setInput,{color: color.weights} ]}
          keyboardType='numeric'
          onChangeText={text => {
            inputData.exercises[exerciseRowIndex].sets[idx].weight = text
            setInputData(inputData)
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
          inputData.exercises[exerciseRowIndex].sets[idx].reps = text
          setInputData(inputData)
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
  