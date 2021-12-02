import React, { useState } from "react"
import { Pressable, ScrollView, Text, View } from "react-native"
import { TTemplate } from "../../data/types"
import { templateStyle} from "./TemplateStyles"
import styles from "../../Styles"
import TemplateModalComponent from "./TemplateModal"
import DateComponent from "../Misc/date"


export default function TemplateView({
                                    templates, setActiveTemplateForWorkout, setSessionModalVisible}:
                                    {templates: TTemplate[], 
                                    setActiveTemplateForWorkout: Function,
                                    setSessionModalVisible: Function}) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeTemplate, setActiveTemplate] = useState<TTemplate>(null);


  return (
    <ScrollView contentContainerStyle={templateStyle.container}>
        <TemplateModalComponent
         modalVisible={modalVisible}
         activeTemplate={activeTemplate}
         onChange={
          (isVisible: boolean, template: TTemplate | null = null, sessionModalVisible = false) =>{
           setModalVisible(isVisible);
           setActiveTemplateForWorkout(template);
           setSessionModalVisible(sessionModalVisible);
          }
        }
         />
        {templates.map((template, i) => {
          return (
            <Pressable key={i} onPress={() => {
              setActiveTemplate(template);
              setModalVisible(!modalVisible);
            }}>
              <ScrollView style={templateStyle.template} key={i}>
                <Text
                  style={[styles.title, {fontSize: 18}]}
                  numberOfLines={1}>
                  {template.title}
                </Text>
                {template.info.map((info, j) => {
                  return (<Text key={j} style={[styles.text, {textAlign: 'left'}]} numberOfLines={1}>{info.exercise.title}</Text>)
                })}
              </ScrollView>
            </Pressable>
          )
        })}
      </ScrollView>
  )
}



