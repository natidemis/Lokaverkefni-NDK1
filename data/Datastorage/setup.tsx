import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExerciseType, TExercise, TSession, TSet } from '../types';
import { ExerciseData } from './ExerciseData';
import { templatesData } from './TemplateData';

export enum keys {
    HISTORY = 'History',
    ALLEXERCISES = 'allexercises',
    TEMPLATES = 'templates',
    SETS = 'sets',
}

export const initStorage = async () => {
    
    try{
        await AsyncStorage.getItem(keys.HISTORY)
        .then(async (data) => {
            const history: TSession[] = JSON.parse(data)
            if(history === null){
                await AsyncStorage.setItem(keys.HISTORY, JSON.stringify([]))
            }
        })

        
       await AsyncStorage.getItem(keys.ALLEXERCISES)
        .then(async (exercises) => {
            exercises = JSON.parse(exercises)
            if(exercises === null) { 
                var exerciseItems = {}
                ExerciseData.forEach(([title, type]:[string, ExerciseType]) => {
                    exerciseItems[Object.keys(exerciseItems).length.toString()] = {
                        title: title + '(' + type + ')',
                        type: type,
                        sets: [],
                        id: Object.keys(exerciseItems).length
                    }
                })
                await AsyncStorage.setItem(keys.ALLEXERCISES, JSON.stringify(exerciseItems))
            }
        })
        
        await AsyncStorage.getItem(keys.TEMPLATES)
        .then(async (templates) => {
            templates = JSON.parse(templates)
            if(templates === null)
                await AsyncStorage.setItem(keys.TEMPLATES, JSON.stringify(templatesData))
        })
        //TODO setja inn grunn template
    }catch (e){
        alert('Villa að upphafstilla gögn')
    }
}

