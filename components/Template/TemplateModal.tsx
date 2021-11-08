import React, { useState } from "react";
import { Modal, Pressable, View, Text } from "react-native";
import { TSession, TTemplate } from "../../data/types";
import { templateModalStyle } from "../../Styles";

export default function TemplateModalComponent(
  {modalVisible, activeTemplate, onChange}: {modalVisible: boolean, activeTemplate: TTemplate, onChange: Function}) {

    return(
     <Modal
       animationType="slide"
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => {
         onChange(!modalVisible)
       }}
     >
       <View style={templateModalStyle.centeredView}>
         <View style={templateModalStyle.modalView}>
           <Text>{activeTemplate?.title}</Text>
           {activeTemplate && activeTemplate?.exercises.map((exercise, i) => {
              return(<Text key={i}> {exercise.sets.length} × {exercise.title}</Text>)
            })}
            <View style={templateModalStyle.buttonsView}
              onLayout={(event) => {
                var {x,y,width, height} = event.nativeEvent.layout;
                console.log(x,y,width,height)
              }}
            >
              <Pressable
                style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                onPress={() => onChange(!modalVisible)}
               >
                <Text style={templateModalStyle.textStyle}>Start</Text>
              </Pressable>
              <Pressable
                style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                onPress={() => onChange(!modalVisible)}
              >
                <Text style={templateModalStyle.textStyle}>Close</Text>
              </Pressable>
            </View>
         </View>
       </View>
     </Modal>
    )
  }
  