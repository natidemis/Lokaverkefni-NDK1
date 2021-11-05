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
           <View style={templateModalStyle.buttonsView}>
             <Pressable
               style={templateModalStyle.button}
               onPress={() => props.onChange(!props.modalVisible)}
             >
               <Text style={templateModalStyle.textStyle}>Start</Text>
             </Pressable>
             <Pressable
               style={[templateModalStyle.button, templateModalStyle.buttonClose]}
               onPress={() => props.onChange(!props.modalVisible)}
             >
               <Text style={templateModalStyle.textStyle}>Close</Text>
             </Pressable>
           </View>
         </View>
       </View>
     </Modal>
    )
  }
  