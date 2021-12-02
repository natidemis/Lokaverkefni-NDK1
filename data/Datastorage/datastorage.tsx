import AsyncStorage from '@react-native-async-storage/async-storage';
import { dummyTemplate } from '../fakedata';
import { ExerciseType, TExercise } from '../types';
import { ExerciseData } from './data';

export enum keys {
    HISTORY = 'History',
    ALLEXERCISES = 'allexercises',
    TEMPLATES = 'templates'
}
//TODO setja inn grunn templates

export const initStorage = async () => {
    console.log("INITIALIZING..................")
    
    try{
        var history = await AsyncStorage.getItem(keys.HISTORY)
        history = JSON.parse(history)
        if(!history)
            await AsyncStorage.setItem(keys.HISTORY, JSON.stringify([]))
        var exercises = await AsyncStorage.getItem(keys.ALLEXERCISES)
        exercises = JSON.parse(exercises)
        if(exercises && Object.keys(exercises).length === 0) { 
            var exerciseItems = {}
            ExerciseData.forEach(([title, type]:[string, ExerciseType]) => {
                exerciseItems[title+'('+type+')'] = {
                    title: title + '(' + type + ')',
                    type: type,
                    sets: [],
                    id: Object.keys(exerciseItems).length
                }
            })
            await AsyncStorage.setItem(keys.ALLEXERCISES, JSON.stringify(exerciseItems))
        }
        let templates = await AsyncStorage.getItem(keys.TEMPLATES)
        templates = JSON.parse(templates)
        if(!templates[0])
            await AsyncStorage.setItem(keys.TEMPLATES, JSON.stringify([dummyTemplate()]))

        //TODO setja inn grunn template
    }catch (e){
        console.error(e)
        process.exit(1)
    }
}

export const fetchTemplates = async () => {
    const data = await AsyncStorage.getItem(keys.TEMPLATES)

    return JSON.parse(data)
}

export const fetchExercises = async () => {
    const data = await AsyncStorage.getItem(keys.ALLEXERCISES)
    return JSON.parse(data)
}