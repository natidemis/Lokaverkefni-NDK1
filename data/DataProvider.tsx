import React, { useEffect, useState } from "react";
import { fetchData, keys, storeExercise, storeHistory } from "./Datastorage/datastorage";
import { TExercise, TSession, TTemplate } from "./types";

type ContextProp = {
    exerciseVariables: {
        exercises: TExercise[],
        saveExercise: Function,
        saveSession: Function,
    },
    historyVariables: {
        history: TSession[],
    }
}
export const StorageContext = React.createContext<ContextProp>(null)
export const DataContextProvider = (props) => {
    const [exercises, setExercises] = useState<TExercise[]>(null);
    const [history, setHistory] = useState<TSession[]>(null);
    const [allTemplates, setAllTemplates] = useState<TTemplate[]>(null);
    useEffect(()=>{
        const getData = async () => {
          const resultExercises: TExercise = await fetchData(keys.ALLEXERCISES)
          let exerciseData:TExercise[] = []
          for(let [_, value] of Object.entries(resultExercises)){
            //@ts-ignore
            exerciseData.push(value)
          }
          const resultHist: TSession[] = await fetchData(keys.HISTORY)
          setExercises(exerciseData)
          setHistory(resultHist)
        }
        getData()
      },[])

    const saveExercise = (exercise: TExercise) => {
        exercises[exercises.findIndex(item => item.id ===  exercise.id)] = exercise
        setExercises(exercises)
        storeExercise(exercise)
      
    }
    const saveSession = (session: TSession) => {
      storeHistory(session)
    }

    return(
        <StorageContext.Provider value={{
            exerciseVariables: {
                exercises: exercises,
                saveExercise: saveExercise,
                saveSession: saveSession,
            },
            historyVariables: {
                history: history,
            }
        }}>
            {props.children}
        </StorageContext.Provider>
    )

}