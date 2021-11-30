export enum ExerciseType{
  unknown = "Unknown", // ??
  barbell = "Barbell",
  dumbbell = "Dumbbell",
  machine = "Machine",
  cable = "Cable",
  body = "Bodyweight"
}

export type TSet = {
  weight: string
  reps: string
  previousKG: string | null
  previousREPS: string | null
  key: string
}

export type TExercise = {
  title: string
  type: ExerciseType
  sets: TSet[]
  key: string
}

export type TTemplate = {
  title: string
  date: string
  exercises: TExercise[]
}

export type TSession =  {
  title: string
  date: string
  duration: string //Laga seinna set Hh:Mm:Ss format
  template: TTemplate //
  exercises: TExercise[] // Líklega upphafstillt sem Template.exercise Ef notandi er að nota ákveðið template.
}
