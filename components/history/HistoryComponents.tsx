import React, { ReactElement } from "react"
import { TExercise, TSession, TSet } from "../../data/types"
import styles from "../../Styles"
import DateComponent, { DurationComponent } from "../Misc/date"
import { historyStyle } from "./HistoryStyle"
import { Text, View } from 'react-native';
import { sortSet } from "../../utils/utils"

export const HistoryHeader = ( {session}: {session: TSession}) => {
    return(
        <React.Fragment>
          <Text
            style={[styles.title, {fontSize: 18}]}
            numberOfLines={1}>
            {session.title}
          </Text>
          <DateComponent style={historyStyle.dateView} item={session}/>
          <DurationComponent style={historyStyle.durationView} item={session} />
        </React.Fragment>
    )
}



export const HistoryExercise = ({exercises}: {exercises: TExercise[]}): ReactElement<View> => {
    
    return (
        <View style={historyStyle.exercisesList}>
            <Text style={styles.title}>Exercises</Text>
            {exercises.map((exercise, i) => {
              return(
                <Text 
                    style={[styles.text, {color: 'black'}]} 
                    key={i} 
                    numberOfLines={1}
                > 
                    {exercise.sets.length} × {exercise.title}({exercise.type})
                </Text>
                )
            })}
        </View>
    )
}


export const HistorySets = ({exercises}: {exercises: TExercise[]}): ReactElement<View> =>{
    return(
        <View style={historyStyle.exercisesSetsList}>
            <Text style={styles.title}>Best sets</Text>
            {exercises.map((exercise,i) => {
                const bestSet: TSet = exercise.sets.sort(sortSet).slice(-1)[0];
                if(bestSet === undefined){
                    return(
                        <Text></Text>
                    )
                }else {
                return(
                    <Text 
                    style={[styles.text, {color: 'black'}]} 
                    key={i} 
                    numberOfLines={1}
                    > 
                        {bestSet.reps} × {bestSet.weight} kg
                    </Text>
                )}
            })}
        </View>
    )
}