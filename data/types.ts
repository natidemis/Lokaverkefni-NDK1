export enum ExerciseType{
  unknown = "Unknown", // ??
  barbell = "Barbell",
  dumbbell = "Dumbbell",
  machine = "Machine",
  cable = "Cable",
  body = "Bodyweight"
}

export type Set = {
  previous: string | null | undefined
  weight: number
  reps: number
}

export type Exercise = {
  title: string
  type: ExerciseType
  sets: Set[]
}

export type Template = {
  title: string
  exercises: Exercise[]
}

export type Session =  {
  title: string
  date: Date
  duration: string //Laga seinna set Hh:Mm:Ss format
  template: Template //
  exercises: Exercise[] // Líklega upphafstillt sem Template.exercise Ef notandi er að nota ákveðið template.
}
