import { ExerciseType, TTemplate } from "../types";

export const templatesData: TTemplate[] = [
    {
        title: 'StrongLifts 5x5 - Workout A',
        info: [{
            exercise:{
                id: 90,
                type: ExerciseType.barbell,
                title: 'Squat',
                sets: []
            },
            numSets: 5,
        },{
            exercise: {
                id: 15,
                type: ExerciseType.barbell,
                title: 'Bench Press',
                sets: []
            },
            numSets: 5,
        },
        {
            exercise: {
                id: 75,
                title: "Pendlay Row",
                type: ExerciseType.barbell,
                sets: []
            },
            numSets: 5,
        }
    ]
    },
    {
        title: 'StrongLifts 5x5 - Workout B',
        info: [{
            exercise:{
                id: 90,
                type: ExerciseType.barbell,
                title: 'Squat',
                sets: []
            },
            numSets: 5,
        },{
            exercise:{
                id: 72,
                type: ExerciseType.barbell,
                title: 'Overhead Press',
                sets: []
            },
            numSets: 5,
        },
        {
            exercise:{
                id: 35,
                type: ExerciseType.barbell,
                title: 'Deadlift',
                sets: []
            },
            numSets: 1,
        }
    ]
    },
]