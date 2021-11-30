import React, { useState } from "react"
import { ListRenderItemInfo, Pressable, TouchableHighlight, View, Text, TextInput} from "react-native"
import { sessionStyle } from "./SessionStyle"
import { EvilIcons } from '@expo/vector-icons';
import { TSet } from "../../data/types";
import styles from "../../Styles";
import { data } from "./Session";


export const SessionHiddenButton = (data, rowMap) => {
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
    inputData: data[][], 
    setInputData: React.Dispatch<React.SetStateAction<data[][]>>,
    exIdx: number,
  }
}
export function SetRow( {data}: Props){
  const {set, idx, inputData, setInputData, exIdx} = data
  const [inputWeight, setInputWeight] = useState<string>(inputData[exIdx][idx].inputWeight)
  const [inputReps, setInputReps] = useState<string>(inputData[exIdx][idx].inputReps)
  return(
    <TouchableHighlight style={sessionStyle.exerciseSetStyle}>
      <React.Fragment>
        <View style= {sessionStyle.rowIdView}>
          <Text style={sessionStyle.rowId}>{idx}</Text>
        </View>
        <PreviousSet set={set}></PreviousSet>
        <TextInput
          style= {sessionStyle.setInput}
          keyboardType='numeric'
          onChangeText={text => {
            inputData[exIdx][idx].inputWeight = text
            setInputData(inputData)
            setInputWeight(text)
          }}
          value= {inputWeight}
       />
       <TextInput
         style= {sessionStyle.setInput}
         keyboardType='numeric'
         onChangeText={text => {
          inputData[exIdx][idx].inputReps = text
          setInputData(inputData)
          setInputReps(text)
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
  