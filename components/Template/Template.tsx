import React, { useState } from "react"
import { Modal, Pressable, ScrollView, Text, View } from "react-native"
import { TTemplate, TSession } from "../../data/types"
import { templateStyle, templateModalStyle } from "../../Styles"
import styles from "../../Styles"
import { dummySession } from "../../data/fakedata"

const sessions = [dummySession]; //Most "recent" data for our template


/**
function ModalSession(props) {

       if (session != null) {
        <Text>{session.title}!!!</Text>
        return (
          <ScrollView>
            <Text style={styles.title}>{session.title}!!</Text>
            {session.exercises.map((exercise, j) => {
              return (<Text key={j} style={styles.text} numberOfLines={1}>
                {exercise.sets.length} × {exercise.title}</Text>)
            })}
          </ScrollView>
        )
      }
    }
 */


export default function TemplateView({templates}: {templates: TTemplate[]}) {
  const [session, setSession] = useState<TSession | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeTemplate, setActiveTemplate] = useState<TTemplate | null>(null);

  return (
    <ScrollView contentContainerStyle={templateStyle.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={templateModalStyle.centeredView}>
            <View style={templateModalStyle.modalView}>
              <Text>{activeTemplate?.title}</Text>
              <View style={templateModalStyle.buttonsView}>
                <Pressable
                  style={templateModalStyle.button}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={templateModalStyle.textStyle}>Start</Text>
                </Pressable>
                <Pressable
                  style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={templateModalStyle.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        {templates.map((template, i) => {
          return (
            <Pressable key={i} onPress={() => {
              console.log(i)
              //set Session Here
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



