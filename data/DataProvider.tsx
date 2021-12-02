import React, { useEffect, useState } from "react";
import { fetchData, fetchTemplates, storeExercise, storeHistory, storeTemplate } from "./Datastorage/datastorage";
import { keys,} from "./Datastorage/setup";
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
    templateVariables: {
        allTemplates: TTemplate[],
        saveTemplate: Function,
    }
}
export const StorageContext = React.createContext<ContextProp>(null)
export const DataContextProvider = (props) => {
    const [exercises, setExercises] = useState<TExercise[]>(null);
    const [history, setHistory] = useState<TSession[]>(null);
    const [allTemplates, setAllTemplates] = useState<TTemplate[]>(null);
    useEffect(()=>{
        const getData = async () => {
          fetchData(keys.ALLEXERCISES)
          .then((resultExercises) => {
            let exerciseData:TExercise[] = []
            for(let [_, value] of Object.entries(resultExercises)){
              //@ts-ignore
              exerciseData.push(value)
            }
            setExercises(exerciseData)
          })
  
          fetchData(keys.HISTORY)
          .then((histResult) => {
              setHistory(histResult)
          })
          fetchTemplates()
          .then((templates) => {
              setAllTemplates(templates)
          })
        }
        getData()
      },[])

    const saveExercise = (exercise: TExercise) => {
        exercises[exercises.findIndex(item => item.id ===  exercise.id)] = exercise
        setExercises(exercises)
        storeExercise(exercise)
      
    }
    const saveSession = (session: TSession) => {
        setHistory([session,...history])
        storeHistory(session)
    }

    const saveTemplate = (template: TTemplate) => {
        const idx = allTemplates.findIndex(item => item.title === template.title)
            if(idx !== -1){
                allTemplates[idx] = template
            }else{
                allTemplates.push(template)
            }
            setAllTemplates(allTemplates)
            storeTemplate(template);
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
            },
            templateVariables:{
                allTemplates: allTemplates,
                saveTemplate: saveTemplate,
            }
        }}>
            {props.children}
        </StorageContext.Provider>
    )

}