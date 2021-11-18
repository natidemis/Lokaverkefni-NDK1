import React from "react"
import { Pressable, View, Text} from "react-native"
import { ExerciseStyles } from "./ExerciseStyle"


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