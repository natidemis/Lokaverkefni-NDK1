import React, { useState } from "react"
import { Modal, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { TTemplate } from "../../data/types"
import styles from "../../Styles"
import { Animations } from "../Misc/animations"
import { templateModalStyle } from "../Template/TemplateStyles"
import ExcerciseRow from "./SessionComponents"
import { sessionStyle } from "./SessionStyle"




export function Session({ modalVisible, template, setSessionActivityState, setShootConfetti}: 
  {modalVisible: boolean, template: TTemplate,
     setSessionActivityState: Function, setShootConfetti: Function }) {
    const [animation, setAnimation] = useState<Animations>(Animations.none);
    //useEffect(() => { //nota til þess að loka glugga
    //  
    //})

    //TODO: birta session glugga
  return (
    <Modal
      animationType = {animation}
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setSessionActivityState(!modalVisible)
      }}
    >
      <View style={sessionStyle.centeredView}>
        <ScrollView contentContainerStyle={sessionStyle.modalView}>
          <Text style={[styles.title, {fontSize: 25} ]}>{template?.title}</Text>
          {template?.exercises.map((exercise,i) => {
            return(
              <ExcerciseRow Exercise={exercise} key={i}/>
            )
          })}

          <View style={sessionStyle.buttonsView} onLayout={
            () => {
              setAnimation(Animations.slide)
            }
          }>
            <Pressable
                    style={[templateModalStyle.button, templateModalStyle.buttonStart]}
                    onPress={() => {
                      //activeTemplate is used to begin a session. Passed to Workout.tsx for the <Session> component.
                      //TODO: SAVE when finished.
                      setSessionActivityState(!modalVisible);
                      setShootConfetti(true);
                    }}
                   >
                    <Text style={sessionStyle.textStyle}>Finish</Text>
            </Pressable>
            <Pressable
                    style={[sessionStyle.button, sessionStyle.buttonClose]}
                    onPress={() => { 
                      setSessionActivityState(!modalVisible);
                    }}
                  >
                    <Text style={templateModalStyle.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </ScrollView>
        
      </View>
    </Modal>
  )
}