import AsyncStorage from '@react-native-async-storage/async-storage';
import { dummyTemplate } from '../fakedata';

export enum keys {
    HISTORY = 'History',
    ALLEXERCISES = 'allexercises',
    TEMPLATES = 'templates'
}
//TODO setja inn grunn templates

export const initStorage = async () => {
    console.log("INITIALIZING..................")
    
    try{
        let history = await AsyncStorage.getItem(keys.HISTORY)
        history = JSON.parse(history)
        if(!history[0])
            await AsyncStorage.setItem(keys.HISTORY, JSON.stringify([]))
        const exercises = await AsyncStorage.getItem(keys.ALLEXERCISES)
        if(!exercises)
            await AsyncStorage.setItem(keys.ALLEXERCISES, JSON.stringify({}))
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