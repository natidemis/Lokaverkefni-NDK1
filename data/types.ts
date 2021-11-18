export enum ExerciseType{
  unknown = "Unknown", // ??
  barbell = "Barbell",
  dumbbell = "Dumbbell",
  machine = "Machine",
  cable = "Cable",
  body = "Bodyweight"
}

export type TSet = {
  weight: number
  reps: number
  previousKG: number | null
  previousREPS: number | null
}

export type TExercise = {
  title: string
  type: ExerciseType
  sets?: TSet[]
}

export type TTemplate = {
  title: string
  date?: string
  exercises: TExercise[]
}

export type TSession =  {
  title: string
  date: string
  duration: string //Laga seinna set Hh:Mm:Ss format
  template: TTemplate //
  exercises: TExercise[] // Líklega upphafstillt sem Template.exercise Ef notandi er að nota ákveðið template.
}
