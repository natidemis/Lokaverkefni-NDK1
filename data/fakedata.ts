// ---- Dummy

import getCurrentDate from '../utils/date';
import { TExercise, ExerciseType, TSession, TTemplate, TSet } from './types';

export const dummyTemplate = (title = 'test template'): TTemplate => {
  return {
    title,
    date: getCurrentDate(),
    exercises: [
      createRandomExercise(),
      createRandomExercise(),
      createRandomExercise(),
      createRandomExercise(),
      createRandomExercise(),
      createRandomExercise(),
      createRandomExercise(),
    ],
  };
};

function createRandomExercise(title?: string): TExercise {
  return {
    title: title || 'Réttstöðulyfta',
    type: ExerciseType.barbell,
    sets: [createSet(), createSet()],
  };
}

function createSet(): TSet {
  const weight = "10";
  const reps = "10";
  return {
    weight: weight,
    reps: reps,
    previousKG: 10,
    previousREPS: 10
  };
}

export const dummyExercises = [
  createRandomExercise(),
  createRandomExercise('Squats'),
  createRandomExercise('Deadlift'),
  createRandomExercise('Bench press'),
  createRandomExercise('Incline Bench press'),
  createRandomExercise('Pull ups'),]

export const dummySession: TSession = {
  title: 'My first session',
  date: getCurrentDate(),
  duration: 'HH:mm:ss',
  template: dummyTemplate('template 1'),
  exercises: [
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
    createRandomExercise(),
  ],
};
