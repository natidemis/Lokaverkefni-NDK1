import React from "react";
import { TextInput, View, Text } from "react-native";
import { TExercise, TSet } from "../../data/types";

function SetRow( { set, rowID }: {set: TSet, rowID: number}){
    const [inputKG, setInputKG] = React.useState<string>();
    const [inputReps, setInputReps] = React.useState<string>()
    return(
      <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
        <View>{rowID}</View>
        <Text>{set.previousKG} × {set.previousREPS} </Text>
        <TextInput
          style= {{backgroundColor:'#808080' }}
          keyboardType='numeric'
          onChangeText={setInputKG}
          value= {inputKG}
         />
         <TextInput
          style= {{backgroundColor:'#808080' }}
          keyboardType='numeric'
          onChangeText={setInputReps}
          value= {inputReps}
         />
      </View>
    )
  }
  
  function Header(){
    return(
      <View style= {{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
        <Text>Set</Text>
        <Text>Previous</Text>
        <Text>kg</Text>
        <Text>Reps</Text>
      </View>
    )
  }
  
  export default function ExcerciseRow( { Exercise }: { Exercise: TExercise}){
    return(
      <React.Fragment>
        <Text>{Exercise.title}</Text>
        <Header/>
        <View style ={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
          {Exercise.sets.map((set, i) => {
            <SetRow set={set} key={i} rowID={i}/>
          })}
        </View>
      </React.Fragment>
    )
  }