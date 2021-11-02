// ---- Dummy

import { TExercise, ExerciseType, TSession, TTemplate, TSet } from "./types"


export const dummyTemplate: TTemplate = {
  title: 'my template',
  exercises: [createRandomExercise(),createRandomExercise(),createRandomExercise(),createRandomExercise()],
}

function createRandomExercise(): TExercise {
  return {
      title: 'Fakeasdfasdfasdfasdf',
      type: ExerciseType.barbell,
      sets: [createSet(),createSet()]
  }
}

function createSet(): TSet{
  const weight = 10;
  const reps = 10;
  return {
    previous: weight + "×" + reps,
    weight: weight,
    reps: reps,
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