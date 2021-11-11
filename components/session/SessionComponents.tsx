import React from "react";
import { TextInput, View, Text } from "react-native";
import { TExercise, TSet } from "../../data/types";
import styles from "../../Styles";
import { sessionStyle } from "./SessionStyle";

function PreviousSet({set}: {set: TSet}){
  if(set.previousKG !== null && set.previousREPS !== null){
    return <Text>{set.previousKG} × {set.previousREPS}</Text>
  }else{
    return <Text></Text>
  }
}
function SetRow( { set, rowID }: {set: TSet, rowID: number}){
    const [inputKG, setInputKG] = React.useState<string>();
    const [inputReps, setInputReps] = React.useState<string>()
    return(
      <View style={sessionStyle.exerciseSetStyle}>
        <View>
          <Text>{rowID}</Text>
        </View>
        <PreviousSet set={set}></PreviousSet>
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
      </View>
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
  
  export default function ExcerciseRow( { Exercise }: { Exercise: TExercise}){
    return(
      <React.Fragment>
        <Text style={styles.title}>{Exercise.title}</Text>
        <Header/>
         <View>
          {Exercise.sets.map((set, i) => {
            return(
              <SetRow set={set} key={i} rowID={i}/>
            )
          })}
        </View> 
        
      </React.Fragment>
    )
  }