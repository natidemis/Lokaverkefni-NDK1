import React, { useState } from "react";
import { Modal, View, Text } from "react-native";
import { TTemplate } from "../../data/types";
import styles from "../../Styles";
import { templateModalStyle, templateStyle } from "./TemplateStyles";
import { AntDesign } from '@expo/vector-icons'; 
import TemplateModalButtons from "./TemplateButtons";
import DateComponent from "../Misc/date";

export enum Animations {
  slide = "slide",
  none = "none"
}



export default function TemplateModalComponent(
  {modalVisible, activeTemplate, onChange}:
   {modalVisible: boolean, activeTemplate: TTemplate, onChange: Function}) {
 
    const [animation, setAnimation] = useState<Animations>(Animations.slide);

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
           <Text style={[styles.title, {fontSize: 25}]}>{activeTemplate?.title}</Text>
           <DateComponent item={activeTemplate}/>
           {activeTemplate?.exercises.map((exercise, i) => {
              return(<Text style={[styles.text, {color: 'black'}]} key={i}> {exercise.sets.length} × {exercise.title}({exercise.type})</Text>)
            })}
            <TemplateModalButtons
              onChange={onChange}
              activeTemplate={activeTemplate}
              setAnimation={setAnimation}
              modalVisible={modalVisible}
            />
         </View>
       </View>
     </Modal>
    )
  }
  