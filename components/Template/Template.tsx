import React from "react"
import { Text, View } from "react-native"
import {TTemplate, TSession as SessionType } from "../../data/types"
import { Exercise } from "../exercise/Exercise"
import styles,{templateStyle} from "../../Styles"

export function Template({ templates }: { templates:TTemplate[] }) {
  
    return (
      <View style={templateStyle.container}>
          {templates.map((template,i) => { 
              return(
                <View style={templateStyle.template} key={i}>
                    <Text style={styles.title}>{template.title}</Text>
                    {template.exercises.map((exercise,j) => {
                        return (<Text key={j} style={styles.text}>{exercise.title}</Text>)
                    })}
                </View> )
          })}   
      </View>
    )
}