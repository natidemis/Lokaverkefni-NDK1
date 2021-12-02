import React, { useState } from "react";
import { Modal, View, Text } from "react-native";
import { TTemplate } from "../../data/types";
import styles from "../../Styles";
import { templateModalStyle } from "./TemplateStyles";
import TemplateModalButtons from "./TemplateButtons";
import DateComponent from "../Misc/date";
import { Animations } from "../Misc/animations";



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
           <DateComponent style={templateModalStyle.dateView} item={activeTemplate}/>
           {activeTemplate?.info.map((info, i) => {
              return(<Text style={[styles.text, {color: 'black'}]} key={i}> {info.numSets} × {info.exercise.title}({info.exercise.type})</Text>)
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
  