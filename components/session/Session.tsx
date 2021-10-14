import React from "react"
import { Text } from "react-native"
import { TSession as SessionType } from "../../data/types"
import { Exercise } from "../exercise/Exercise"
import styles from "../../Styles"

export function Session({ session }: { session: SessionType }) {
  return (
    <React.Fragment>
      <Text style={styles.text}>Title: {session.title}</Text>
      <Text style={styles.text}>Date: YYYY-MM-DD</Text>
      <Text style={styles.text}>Duration: {session.duration}</Text>
      {session.exercises.map((exercise, i) => {
        <Exercise exercise={exercise} key={i} />
      })}
    </React.Fragment>
  )
}