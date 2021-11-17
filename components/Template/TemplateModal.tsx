import React, { useState } from "react";
import { Modal, Pressable, View, Text } from "react-native";
import { TTemplate } from "../../data/types";
import styles from "../../Styles";
import { templateModalStyle } from "./TemplateStyles";

export enum Animations {
  slide = "slide",
  none = "none"
}
export default function TemplateModalComponent(
  {modalVisible, activeTemplate, onChange}:
   {modalVisible: boolean, activeTemplate: TTemplate, onChange: Function}) {
 
    const [animation, setAnimation] = useState<Animations>(Animations.slide);
    //useEffect(() => {
    //  console.log("here")
    //},[animation]);
    return(
     <Modal
       animationType={animation}
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => {
         onChange(!modalVisible);
       }}
     >
       <View style={templateModalStyle.centeredView}>
         <View style={templateModalStyle.modalView}>
           <Text style={styles.title}>{activeTemplate?.title}</Text>
           {activeTemplate?.exercises.map((exercise, i) => {
              return(<Text style={styles.text} key={i}> {exercise.sets.length} × {exercise.title}({exercise.type})</Text>)
            })}
            <View style={templateModalStyle.buttonsView}
              onLayout={(event) => {
                setAnimation(Animations.none);
              }}
            >
              <Pressable
                style={[templateModalStyle.button, templateModalStyle.buttonStart]}
                onPress={() => {
                  //activeTemplate is used to begin a session. Passed to Workout.tsx for the <Session> component.
                  onChange(!modalVisible, activeTemplate, true);
                  setAnimation(Animations.slide);
                }}
               >
                <Text style={templateModalStyle.textStyle}>Start</Text>
              </Pressable>
              <Pressable
                style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                onPress={() => { 
                  onChange(!modalVisible);

                  setAnimation(Animations.slide);
                }}
              >
                <Text style={templateModalStyle.textStyle}>Close</Text>
              </Pressable>
            </View>
         </View>
       </View>
     </Modal>
    )
  }
  