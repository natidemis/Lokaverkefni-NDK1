// ---- Dummy

import getCurrentDate from '../utils/date';
import { TExercise, ExerciseType, TSession, TTemplate, TSet } from './types';

export const dummyTemplate = (title = 'test template'): TTemplate => {
  return {
    title,
    date: getCurrentDate(),
    exercises: [
      createRandomExercise(`${1-1}`),
      createRandomExercise(`${2-1}`),
      createRandomExercise(`${3-1}`),
      createRandomExercise(`${4-1}`),
      createRandomExercise(`${5-1}`),
      createRandomExercise(`${6-1}`),
      createRandomExercise(`${7-1}`),
    ],
  };
};

function createRandomExercise(key: string, title?: string,): TExercise {
  return {
    title: title || 'Réttstöðulyfta',
    type: ExerciseType.barbell,
    sets: [createSet(`${0}`), createSet(`${1}`)],
    key: key
  };
}

function createSet(key: string): TSet {
  const weight = "10";
  const reps = "10";
  return {
    weight: weight,
    reps: reps,
    previousKG: weight,
    previousREPS: reps,
    key: key
  };
}

export const dummyExercises = [
    createRandomExercise(`${1-1}`),
    createRandomExercise(`${2-1}`),
    createRandomExercise(`${3-1}`),
    createRandomExercise(`${4-1}`),
    createRandomExercise(`${5-1}`),
    createRandomExercise(`${6-1}`),
    createRandomExercise(`${7-1}`),
]
export const dummySession: TSession = {
  title: 'My first session',
  date: getCurrentDate(),
  duration: 'HH:mm:ss',
  template: dummyTemplate('template 1'),
  exercises: [
    createRandomExercise(`${1-1}`),
      createRandomExercise(`${2-1}`),
      createRandomExercise(`${3-1}`),
      createRandomExercise(`${4-1}`),
      createRandomExercise(`${5-1}`),
      createRandomExercise(`${6-1}`),
      createRandomExercise(`${7-1}`),
  ],
};
