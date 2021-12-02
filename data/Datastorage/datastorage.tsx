import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExerciseType, TExercise, TSession, TTemplate } from '../types';
import { ExerciseData } from './ExerciseData';
import { keys } from './setup';
import { templatesData } from './TemplateData';


export const fetchData= async (key: keys) => {
    var result: any;
    await AsyncStorage.getItem(key).then((data) => {
        result= JSON.parse(data)
    })
    return result;
}

export const fetchTemplates= async () => {
    var result: TTemplate[];
    await AsyncStorage.getItem(keys.TEMPLATES)
    .then(async (data) => {
        result= JSON.parse(data)
        //loop through each template
        for(var i in result){
            for(var j in result[i].info){
                //update the exercise by fetching from the exercise storage
                await fetchExerciseById(result[i].info[j].exercise.id)
                .then((exercise) => {
                    result[i].info[j].exercise = exercise
                })
            }
        }
    })
    return result;
}

export const fetchExerciseById = async(id: number) => {
    var result: TExercise;
    await fetchData(keys.ALLEXERCISES)
    .then((data) => {
        result = data[id.toString()]
    })
    return result
}

export const storeExercise = (exercise: TExercise) => {
    AsyncStorage.getItem(keys.ALLEXERCISES)
        .then(async (exercises) => {
            var exercisesOBJ = JSON.parse(exercises) || {}
            exercisesOBJ[exercise.id.toString()] = exercise
            AsyncStorage.setItem(keys.ALLEXERCISES, JSON.stringify(exercisesOBJ))
        })
}

export const storeHistory = (session: TSession) => {
    AsyncStorage.getItem(keys.HISTORY)
        .then(async (history) => {
            var histOBJ = JSON.parse(history) 
            histOBJ.push(session)
            AsyncStorage.setItem(keys.HISTORY, JSON.stringify(histOBJ))
        })
}

export const storeTemplate= (template: TTemplate) => {
    AsyncStorage.getItem(keys.TEMPLATES)
        .then(async (templates) => {
            var templateOBJ = JSON.parse(templates) 
            const idx = templateOBJ.findIndex(item => item.title === template.title)
            if(idx !== -1){
                templateOBJ[idx] = template
            }else{
                templateOBJ.push(template)
            }
            AsyncStorage.setItem(keys.HISTORY, JSON.stringify(templateOBJ))
        })
}