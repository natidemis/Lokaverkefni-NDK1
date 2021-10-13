import React from "react"
import { Text } from "react-native"
import { Session as SessionType } from "../../data/types"
import { Exercise } from "../exercise/Exercise"

export function Session({ session }: { session: SessionType }) {
  return (
    <React.Fragment>
      <Text>Title: {session.title}</Text>
      <Text>Date: {session.date}</Text>
      <Text>Duration: {session.duration}</Text>
      {session.exercises.map((exercise, i) => {
        <Exercise exercise={exercise} key={i} />
      })}
    </React.Fragment>
  )
}