import React, { useState } from "react"
import { Pressable, ScrollView, Text, View } from "react-native"
import { TTemplate } from "../../data/types"
import { templateStyle} from "./TemplateStyles"
import styles from "../../Styles"
import { dummySession } from "../../data/fakedata"
import TemplateModalComponent from "./TemplateModal"
import { AntDesign } from '@expo/vector-icons'; 

const sessions = [dummySession]; //Most "recent" data for our template


export default function TemplateView({
                                    templates, setActiveTemplateForWorkout, setSessionModalVisible}:
                                    {templates: TTemplate[], 
                                    setActiveTemplateForWorkout: Function,
                                    setSessionModalVisible: Function}) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeTemplate, setActiveTemplate] = useState<TTemplate | null>(null);


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
                {template.exercises.map((exercise, j) => {
                  return (<Text key={j} style={styles.text} numberOfLines={1}>{exercise.title}</Text>)
                })}
                {template.date? 
                (<View style = {templateStyle.dateView}>
                  <AntDesign name="clockcircle" size={20} color="grey" style={{bottom: 5,marginLeft: 10}}/>
                   <Text style={styles.textDate}>{template.date}</Text>
               </View>) : null}
              </ScrollView>
            </Pressable>
          )
        })}
      </ScrollView>
  )
}



