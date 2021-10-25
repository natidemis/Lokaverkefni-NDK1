import React from "react"
import { Text, View } from "react-native"
import {TTemplate, TSession as SessionType } from "../../data/types"
import { Exercise } from "../exercise/Exercise"
import {templateStyle} from "../../Styles"

export function Template({ templates }: { templates:TTemplate[] }) {
  
    return (
      <View style={templateStyle.container}>
          {templates.map((template,i) => { //virkar ekki í forlykkju

              <View style={templateStyle.template} key={i}>
                  <Text>{template.title}</Text>
              </View>
          })}   
      </View>
    )
}