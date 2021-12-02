import React, { useState } from "react"
import { Pressable, View, Text, TextInput} from "react-native"
import { DataProptype } from "./Exercise"
import { ExerciseStyles } from "./ExerciseStyle"
import filter from 'lodash.filter';

export const NewExerciseButton = () => {
    return (
    <View style={ExerciseStyles.startBtnView}>
      <Pressable
            style={[ExerciseStyles.button]}
            onPress={() => {
              //TODO: create new set on click.
              //activeTemplate is used to begin a session. Passed to Workout.tsx for the <Session> component.
            }}
           >
            <Text style={ExerciseStyles.btnTextStyle}>+ Exercise</Text>
          </Pressable>
      </View>
    )
}


type Props = {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  data: DataProptype[],
  setData: React.Dispatch<React.SetStateAction<DataProptype[]>>,
}
export function SearchBar({query, setQuery,data, setData}: Props ) {

  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 20
      }}
    >
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={query}
        onChangeText={queryText =>{
          const filteredData = filter(data, (item: DataProptype) => {
            return (({value}, querystring) => (
              value.toLowerCase().includes(querystring.toLowerCase())))(item,query)
          })
          setQuery(queryText)
          setData(filteredData)
        }}
        placeholder="Search"
        style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
      />
    </View>
  );
}