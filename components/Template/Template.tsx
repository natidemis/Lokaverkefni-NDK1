import React, { useState } from "react"
import { Modal, Pressable, ScrollView, Text, View } from "react-native"
import { TTemplate, TSession } from "../../data/types"
import { templateStyle, templateModalStyle } from "../../Styles"
import styles from "../../Styles"
import { dummySession } from "../../data/fakedata"
import TemplateModalComponent from "./TemplateModal"

const sessions = [dummySession]; //Most "recent" data for our template


export default function TemplateView({
                                    templates, onChange}:
                                    {templates: TTemplate[], onChange: Function}) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeTemplate, setActiveTemplate] = useState<TTemplate | null>(null);


  return (
    <ScrollView contentContainerStyle={templateStyle.container}>
        <TemplateModalComponent
         modalVisible={modalVisible}
         activeTemplate={activeTemplate}
         onChange={
          (isVisible: boolean, template: TTemplate | null = null) =>{
           setModalVisible(isVisible);
           onChange(template);
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
                  style={styles.title}
                  numberOfLines={1}>
                  {template.title}
                </Text>
                {template.exercises.map((exercise, j) => {
                  return (<Text key={j} style={styles.text} numberOfLines={1}>{exercise.title}</Text>)
                })}
              </ScrollView>
            </Pressable>
          )
        })}
      </ScrollView>
  )
}



