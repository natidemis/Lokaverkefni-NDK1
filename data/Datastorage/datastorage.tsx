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
        if(!templates)
            await AsyncStorage.setItem(keys.TEMPLATES, JSON.stringify([dummyTemplate()]))

        //TODO setja inn grunn template
    }catch (e){
        alert('Villa að upphafstilla gögn')
    }
}

export const fetchData= async (key: keys) => {
    const data = await AsyncStorage.getItem(key)
    return JSON.parse(data)
}
