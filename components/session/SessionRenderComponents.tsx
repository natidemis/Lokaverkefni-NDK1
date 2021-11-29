import React, { Dispatch, SetStateAction } from "react"
import { ListRenderItemInfo, Pressable, TouchableHighlight, View, Text, TextInput} from "react-native"
import { sessionStyle } from "./SessionStyle"
import { EvilIcons } from '@expo/vector-icons';
import { TSet } from "../../data/types";
import styles from "../../Styles";

export type TSetWithId = {data: {
  weightUS: [string, React.Dispatch<React.SetStateAction<string>>],
  repsUS: [string, React.Dispatch<React.SetStateAction<string>>]
}, key: string}
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


//export const RenderSet = (data, rowMap) => {
//  return (
//      <TouchableHighlight>
//        <SetRow set={data} />
//      </TouchableHighlight>
//  )
//}


export function SetRow( { set }: {set: ListRenderItemInfo<TSetWithId>}){
  const [weight, setWeight] = set.item.data.weightUS;
  const [reps, setReps] = set.item.data.repsUS;
  return(
    <TouchableHighlight style={sessionStyle.exerciseSetStyle}>
      <React.Fragment>
        <View style= {sessionStyle.rowIdView}>
          <Text style={sessionStyle.rowId}>{set.index}</Text>
        </View>
        <PreviousSet reps={`${reps}`} weight={`${weight}`}></PreviousSet>
        <TextInput
          style= {sessionStyle.setInput}
          keyboardType='numeric'
          onChangeText={setWeight}
          value= {weight}
       />
       <TextInput
         style= {sessionStyle.setInput}
         keyboardType='numeric'
         onChangeText={setReps}
         value= {reps}
        />
      </React.Fragment>
      
    </TouchableHighlight>
  )
}


type Props =  {
  weight: string,
  reps: string;
}
export function PreviousSet({weight, reps }: Props){

  if(reps && weight){
    return (
      <View style={sessionStyle.prevTextView}>
        <Text
          style={[styles.text, sessionStyle.prevText]}>
            {reps} × {weight}
          </Text>
      </View>
    )
  }else{
    return <Text></Text>
  }
}
  