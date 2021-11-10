import React, { useEffect } from "react"
import { Modal, ScrollView, Text } from "react-native"
import { TSession as SessionType, TTemplate } from "../../data/types"
import { Exercise } from "../exercise/Exercise"


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
      onRequestClose={() => {
        setSessionActivityState(!modalVisible)
      }}
    >
      <ScrollView>
        
      </ScrollView>
    </Modal>
  )
}