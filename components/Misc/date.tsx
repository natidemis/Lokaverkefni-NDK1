import AntDesign from "@expo/vector-icons/build/AntDesign";
import React from "react";
import { TSession, TTemplate } from "../../data/types";
import styles from "../../Styles";
import {Text, View} from 'react-native';
import { templateStyle } from "../Template/TemplateStyles";


export default function DateComponent({item}:{item: TTemplate | TSession}){
    if (item.date){
        return (
          <View style = {templateStyle.dateView}>
            <AntDesign name="clockcircle" size={20} color="grey" style={{bottom: 5,marginLeft: 10}}/>
           <Text style={styles.textDate}>{item.date}</Text>
          </View>
        )
    }else{
        return <View></View>
    }

}