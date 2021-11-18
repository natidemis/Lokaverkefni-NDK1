import React from "react"
import { ListRenderItemInfo, Pressable, TouchableHighlight, View, Text, TextInput} from "react-native"
import { sessionStyle } from "./SessionStyle"
import { EvilIcons } from '@expo/vector-icons';
import { TSet } from "../../data/types";
import styles from "../../Styles";

type TSetWithId = {data: TSet, key: number}



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


export const RenderSet = (data, rowMap) => {
  return (
      <TouchableHighlight>
        <SetRow set={data} />
      </TouchableHighlight>
  )
}


function SetRow( { set }: {set: ListRenderItemInfo<TSetWithId>}){
  const [inputKG, setInputKG] = React.useState<string>();
  const [inputReps, setInputReps] = React.useState<string>()
  return(
    <TouchableHighlight style={sessionStyle.exerciseSetStyle}>
      <React.Fragment>
        <View style= {sessionStyle.rowIdView}>
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



function PreviousSet({set}: {set: TSet}){
  if(set.previousKG !== null && set.previousREPS !== null){
    return (
      <View style={sessionStyle.prevTextView}>
        <Text
          style={[styles.text, sessionStyle.prevText]}>
            {set.previousKG} × {set.previousREPS}
          </Text>
      </View>
    )
  }else{
    return <Text></Text>
  }
}
  