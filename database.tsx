import AsyncStorage from '@react-native-async-storage/async-storage';

//TODO : fall sem setur inn lista af æfingum í gagnagrunn

enum ExerciseType{
    barbell = "Barbell",
    dumbbell = "Dumbbell",
    machine = "Machine",
    cable = "Cable",
    body = "Bodyweight"
}

class Set{
    previous: string | null | undefined
    weight: number
    reps: number
}

class Exercise{
    title: string
    type: ExerciseType
    Sets: Set[]
}

class Template{
    title: string
    exercises: Exercise[]
}

class Session {
    title: string
    date: Date
    duration: string //Laga seinna set Hh:Mm:Ss format
    template: Template //
    exercises: Exercise[] // Líklega upphafstillt sem Template.exercise Ef notandi er að nota ákveðið template.
}

const fetchSessions: Function = async function(key: string){
    const sessions = await AsyncStorage.getItem(key)
    return JSON.parse(sessions)
}

export default Session
// export default fetchSessions ??