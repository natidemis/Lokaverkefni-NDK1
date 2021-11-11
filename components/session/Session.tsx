import React, { useEffect } from "react"
import { Modal, ScrollView, Text, TextInput, View } from "react-native"
import { TExercise, TSession as SessionType, TSet, TTemplate } from "../../data/types"
import { Exercise } from "../exercise/Exercise"
import ExcerciseRow from "./SessionComponents"
import { sessionStyle } from "./SessionStyle"



export function Session({ modalVisible, template, setSessionActivityState}: 
  {modalVisible: boolean, template: TTemplate, setSessionActivityState: Function }) {
    //useEffect(() => { //nota til þess að loka glugga
    //  
    //})

    //TODO: birta session glugga
  return (
    <Modal
      animationType = "none"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setSessionActivityState(!modalVisible)
      }}
    >
      <ScrollView contentContainerStyle={sessionStyle.centeredView}>
        <View style={sessionStyle.modalView}>
          <Text>{template?.title}</Text>
          {template?.exercises.map((exercise,i) => {
            //Exercise row ekki að birtast?
            return(
              <ExcerciseRow Exercise={exercise} key={i}/>
            )
          })}
        </View>
      </ScrollView>
    </Modal>
  )
}