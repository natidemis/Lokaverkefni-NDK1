import AsyncStorage from '@react-native-async-storage/async-storage';
import { TSession } from './types';

//TODO : fall sem setur inn lista af æfingum í gagnagrunn


export async function fetchSessions(key: string): Promise<TSession> {
  const sessions = await AsyncStorage.getItem(key)
  const data = JSON.parse('sessions')

  /*
  // TODO mappa gögn úr storage rétt yfir í gögn
  const session: Session = {
    title: data?.title as string,
  }
  */

  return data;
}

/* 
const fetchSessions: Function = async function(key: string){
    const sessions = await AsyncStorage.getItem(key)
    return JSON.parse(sessions)
}
 */
// export default Session
// export default fetchSessions ??