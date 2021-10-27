import React from "react"
import { Alert, Modal, Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import {TTemplate, TSession as SessionType } from "../../data/types"
import { Exercise } from "../exercise/Exercise"
import Styles,{templateStyle, templateModalStyle} from "../../Styles"
import styles from "../../Styles"


  

export default class TemplateView extends React.Component<{templates: TTemplate[]},any>{
    constructor(props){
        super(props)
    }

    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render(){ 
      const { modalVisible } = this.state;
      return (
        <View style={templateStyle.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={templateModalStyle.centeredView}>
              <View style={templateModalStyle.modalView}>
                <Text style={templateModalStyle.modalText}>Hello World!</Text>
                <Pressable
                  style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={templateModalStyle.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>  
          {this.props.templates.map((template,i) => { 
          return (
              <TouchableHighlight onPress={() => this.setModalVisible(true)}>
                  <View style={templateStyle.template} key={i}>
                      <Text style={styles.title}>{template.title}</Text>
                      {template.exercises.map((exercise,j) => {
                          return (<Text key={i+j+1} style={styles.text}>{exercise.title}</Text>)
                      })}
                  </View> 
              </TouchableHighlight>
            )
          })}   
        </View> 
    )}
}


