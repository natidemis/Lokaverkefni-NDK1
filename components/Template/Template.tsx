import React from "react"
import { Alert, FlatList, Modal, Pressable, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import {TTemplate, TSession } from "../../data/types"
import { Exercise } from "../exercise/Exercise"
import Styles,{templateStyle, templateModalStyle} from "../../Styles"
import styles from "../../Styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { dummySession } from "../../data/fakedata"


const sessions = [dummySession]; //Most "recent" data for our template
export default class TemplateView extends React.Component<{templates: TTemplate[]},any>{
    constructor(props){
        super(props)
    }

    state = {
        modalVisible: false,
        session: null,
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible, session: null });
    }

    setModalVisibleWithKey = (visible, idx) => {
      /**
       * idx is a template key to fetch a session with a matching template
       */
      const template: TTemplate = this.props.templates[idx];
      for(var i = 0; i < sessions.length;i++){
          var session: TSession = sessions[i];
          if(session.template.title === template.title){
            this.setState({modalVisible:  visible, session: session })
          }
      }
    }


    render(){ 
      const { modalVisible, session }: {modalVisible: boolean, session: TSession} = this.state;
      function ModalSession(props){
        /**
         * returns a scrollView according to a session
         */
        if(session != null){
          <Text>{session.title}</Text>
          return(
              <ScrollView>
                <Text style={styles.title}>{session.title}</Text>
                {session.exercises.map((exercise,j) => {
                return (<Text key={j} style={styles.text} numberOfLines={1}>
                  {exercise.sets.length} × {exercise.title}</Text>)
              })}
              </ScrollView>
          )
        }
      }
      return (
        <SafeAreaView style={templateStyle.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={templateModalStyle.centeredView}>
              <View style={templateModalStyle.modalView}>
                <ModalSession/>

                <Pressable
                  style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={templateModalStyle.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>  
          {this.props.templates.map((template,i) => { 
          return (
              <Pressable key={i} onPress={() => this.setModalVisibleWithKey(true,i)}>
                  <ScrollView style={templateStyle.template} key={i}>
                      <Text
                        style={styles.title}
                        numberOfLines={1}>
                          {template.title}
                      </Text>
                      {template.exercises.map((exercise,j) => {
                          return (<Text key={j} style={styles.text} numberOfLines={1}>{exercise.title}</Text>)
                      })}
                  </ScrollView> 
              </Pressable>
            )
          })}   
        </SafeAreaView> 
    )}
}


