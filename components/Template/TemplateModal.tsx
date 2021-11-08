import React, { useState } from "react";
import { Modal, Pressable, View, Text } from "react-native";
import { TSession } from "../../data/types";
import { templateModalStyle } from "../../Styles";

export default function TemplateModalComponent(props) {

    return(
     <Modal
       animationType="slide"
       transparent={true}
       visible={props.modalVisible}
       onRequestClose={() => {
         props.onChange(!props.modalVisible)
       }}
     >
       <View style={templateModalStyle.centeredView}>
         <View style={templateModalStyle.modalView}>
           <Text>{props.activeTemplate?.title}</Text>
           {props.activeTemplate && props.activeTemplate?.map((exercise, i) => {
              return(<Text key={i}> {exercise.sets.length} '×' {exercise.title}</Text>)
            })}
            <View style={templateModalStyle.buttonsView}
              onLayout={(event) => {
                var {x,y,width, height} = event.nativeEvent.layout;
                console.log(x,y,width,height)
              }}
            >
              <Pressable
                style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                onPress={() => props.onChange(!props.modalVisible)}
               >
                <Text style={templateModalStyle.textStyle}>Start</Text>
              </Pressable>
              <Pressable
                style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                onPress={() => props.onChange(!props.modalVisible)}
              >
                <Text style={templateModalStyle.textStyle}>Start</Text>
              </Pressable>
            </View>
         </View>
       </View>
     </Modal>
    )
  }
  