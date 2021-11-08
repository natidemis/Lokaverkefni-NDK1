import React, { useEffect, useState } from "react";
import { Modal, Pressable, View, Text } from "react-native";
import { TSession, TTemplate } from "../../data/types";
import { templateModalStyle } from "../../Styles";

export default function TemplateModalComponent(
  {modalVisible, activeTemplate, onChange}:
   {modalVisible: boolean, activeTemplate: TTemplate, onChange: Function}) {
    enum Animations {
      slide = "slide",
      none = "none"
    }
    console.log('-----')
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
           <Text>{activeTemplate?.title}</Text>
           {activeTemplate?.exercises.map((exercise, i) => {
              return(<Text key={i}> {exercise.sets.length} × {exercise.title}</Text>)
            })}
            <View style={templateModalStyle.buttonsView}
              onLayout={(event) => {
                var {x,y,width, height} = event.nativeEvent.layout;
                setAnimation(Animations.none);
              }}
            >
              <Pressable
                style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                onPress={() => {
                  onChange(!modalVisible);

                  setAnimation(Animations.slide);
                }}
               >
                <Text style={templateModalStyle.textStyle}>Start</Text>
              </Pressable>
              <Pressable
                style={[templateModalStyle.button, templateModalStyle.buttonClose]}
                onPress={() => { 
                  //activeTemplate is used to begin a session. Passed to Workout.tsx for the <Session> component.
                  onChange(!modalVisible, activeTemplate);
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
  