import AsyncStorage from '@react-native-async-storage/async-storage';
import { dummyTemplate } from '../fakedata';
import { ExerciseType, TExercise } from '../types';
import { ExerciseData } from './ExerciseData';

export enum keys {
    HISTORY = 'History',
    ALLEXERCISES = 'allexercises',
    TEMPLATES = 'templates'
}

export const initStorage = async () => {
    
    try{
        await AsyncStorage.getItem(keys.HISTORY)
        .then(async (history) => {
            history = JSON.parse(history)
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
                    exerciseItems[title+'('+type+')'] = {
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
                await AsyncStorage.setItem(keys.TEMPLATES, JSON.stringify([dummyTemplate()]))
        })
        //TODO setja inn grunn template
    }catch (e){
        alert('Villa að upphafstilla gögn')
    }
}

export const fetchData= async (key: keys) => {
    const data = await AsyncStorage.getItem(key)
    return JSON.parse(data)
    var result;
    AsyncStorage.getItem(key)
    .then(data => {
        result = JSON.parse(data)
    })
    return result
}
