import React, { createContext, Dispatch, useEffect, useState } from "react"
import { FlatList, Modal, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { ExerciseType, TExercise, TSet, TTemplate, TTemplateExercises } from "../../data/types"
import styles from "../../Styles"
import { Animations } from "../Misc/animations"
import { templateModalStyle } from "../Template/TemplateStyles"
import { DataContext } from "./DataContext"
import ExcerciseRow from "./SessionComponents"
import { SessionButtons } from "./SessionRenderComponents"
import { sessionStyle } from "./SessionStyle"



export type ExercisesWkey = {
  exercise: TExercise, 
  key: string,
  //stateSet: [TSet[], Dispatch<React.SetStateAction<TSet[]>>]
}

type Props = {
  modalVisible: boolean, 
  template: TTemplate,
  setSessionActivityState: React.Dispatch<React.SetStateAction<boolean>>, 
  setShootConfetti: React.Dispatch<React.SetStateAction<boolean>> 
}


export type data = {
  inputWeight: string,
  inputReps: string
}
export function Session({ modalVisible, template, setSessionActivityState, setShootConfetti}: Props) {
    const [animation, setAnimation] = useState<Animations>(Animations.none);
    const [data, setData] = useState<TTemplate>(template)
    const [isFinished, setIsFinished] = useState<boolean>(false);

    useEffect(() => {
      setData(template)
    },[template])



  return (
    <Modal
      animationType = {animation}
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setSessionActivityState(!modalVisible)
      }}
    >
      <DataContext.Provider 
        value={{
          data: data,
          setData: setData,
          isFinished: isFinished,
          setIsFinished: setIsFinished,
          isSessionActive: modalVisible,
        }
      }>
        <View style= {sessionStyle.centeredView}>
          <View style={sessionStyle.modalView}>
            {data? (
            <FlatList
              data={data?.info}
              renderItem={({item, index}) => {
                return (
                  <ExcerciseRow 
                    Exercise={item.exercise}
                    key={item.exercise.id}
                    exerciseRowIndex={index}
                    />
                )
              }}
              keyExtractor={item => `${item.exercise.id}`}
              ListHeaderComponent={
                <Text style={[styles.title, {fontSize: 25} ]}>{template?.title}</Text>
              }
              ListFooterComponent={
              <SessionButtons
                setAnimation={setAnimation}
                setSessionActivityState={setSessionActivityState}
                setShootConfetti={setShootConfetti}
                data={data}
                modalVisible={modalVisible}
              />
            }
              />) : <></>}
          </View>
        </View>
      </DataContext.Provider>
    </Modal>
  )
}