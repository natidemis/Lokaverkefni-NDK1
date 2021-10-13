// ---- Dummy

import { Exercise, ExerciseType, Session, Template } from "./types"

const dummyTemplate: Template = {
  title: 'my template',
  exercises: [],
}

function createRandomExercise(): Exercise {
  return {
      title: 'Fakeasdfasdfasdfasdf',
      type: ExerciseType.barbell,
      sets: []
  }
}

export const dummySession: Session = {
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