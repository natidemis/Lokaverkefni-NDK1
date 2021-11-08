import React, { useEffect } from "react"
import { Modal, Text } from "react-native"
import { TSession as SessionType, TTemplate } from "../../data/types"
import { Exercise } from "../exercise/Exercise"
import styles from "../../Styles"

export function Session({ modalVisible, template }: 
  {modalVisible: boolean, template: TTemplate }) {
    //useEffect(() => { //nota til þess að loka glugga
    //  
    //})

    //TODO: birta session glugga
  return (
    <Modal
      animationType = "none"
      visible={modalVisible}
      onRequestClose={() => {}}
    >
    </Modal>
  )
}