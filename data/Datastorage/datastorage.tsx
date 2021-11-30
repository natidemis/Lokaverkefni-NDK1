import AsyncStorage from '@react-native-async-storage/async-storage';

export enum keys {
    HISTORY = 'History',
    ALLEXERCISES = 'allexercises'
}
//TODO setja inn grunn templates

export const initStorage = async () => {
    try{
        const history = await AsyncStorage.getItem(keys.HISTORY)
        if(!history)
            await AsyncStorage.setItem(keys.HISTORY, JSON.stringify([]))
        const exercises = await AsyncStorage.getItem(keys.ALLEXERCISES)
        if(!exercises)
            await AsyncStorage.setItem(keys.ALLEXERCISES, JSON.stringify({}))

        //TODO setja inn grunn template
    }catch (e){
        console.error(e)
        process.exit(1)
    }
}