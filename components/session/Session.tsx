import React, { Dispatch, useEffect, useState } from "react"
import { FlatList, Modal, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { ExerciseType, TExercise, TSet, TTemplate } from "../../data/types"
import styles from "../../Styles"
import { Animations } from "../Misc/animations"
import { templateModalStyle } from "../Template/TemplateStyles"
import ExcerciseRow from "./SessionComponents"
import { sessionStyle } from "./SessionStyle"



export type ExercisesWkey = {
  exercise: TExercise, 
  key: string,
  //stateSet: [TSet[], Dispatch<React.SetStateAction<TSet[]>>]
}

type Props = {
  modalVisible: boolean, 
  template: TTemplate,
  setSessionActivityState: Function, 
  setShootConfetti: Function 
}


export type data = {
  inputWeight: string,
  inputReps: string
}
export function Session({ modalVisible, template, setSessionActivityState, setShootConfetti}: Props) {
    const [animation, setAnimation] = useState<Animations>(Animations.none);
    const [data, setData] = useState<TTemplate>(template)

    useEffect(() => {
      setData(template)
    },[template])



    //TODO: take the functions in as arguments and move this to "SessionRenderComponents.tsx"
    const SessionButtons = () => {
      return(
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
                    console.log(data)
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
      )
    }

  return (
    <Modal
      animationType = {animation}
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setSessionActivityState(!modalVisible)
      }}
    >

    <View style= {sessionStyle.centeredView}>
      <View style={sessionStyle.modalView}>
        {/* 
        Flat list ekki að virka á exercise row?
        */}
        {data? (
        <FlatList
          data={data?.exercises}
          renderItem={(item) => {
            return (
              <ExcerciseRow 
                Exercise={item.item}
                key={item.item.key}
                inputData={data}
                setInputData={setData}
                exerciseRowIndex={parseInt(item.item.key)}
                />
            )
          }}
          keyExtractor={item => item.key}
          ListHeaderComponent={
            <Text style={[styles.title, {fontSize: 25} ]}>{template?.title}</Text>
          }
          ListFooterComponent={SessionButtons}
          />) : <></>}
        </View>
      </View>
    </Modal>
  )
}