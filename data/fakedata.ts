// ---- Dummy

import { TExercise, ExerciseType, TSession, TTemplate } from "./types"

const dummyTemplate: TTemplate = {
  title: 'my template',
  exercises: [],
}

function createRandomExercise(): TExercise {
  return {
      title: 'Fakeasdfasdfasdfasdf',
      type: ExerciseType.barbell,
      sets: []
  }
}

export const dummySession: TSession = {
  title: 'My session',
  date: new Date(),
  duration: '10',
  template: dummyTemplate,
  exercises: [
      createRandomExercise(),
      createRandomExercise(),
      createRandomExercise(),
      createRandomExercise(),
      createRandomExercise(),
  ]
}