import React from "react";
import { TExercise } from "../../data/types";
import { Text } from "react-native";
import styles from "../../Styles";
export function Exercise({ exercise }: { exercise: TExercise }) {
  return (
    <React.Fragment>
      <Text style={styles.text}>{exercise.title}</Text>
    </React.Fragment>
  )
}
