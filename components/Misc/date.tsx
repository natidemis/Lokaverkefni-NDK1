import AntDesign from "@expo/vector-icons/build/AntDesign";
import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { TSession, TTemplate } from "../../data/types";
import styles from "../../Styles";
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import { templateStyle } from "../Template/TemplateStyles";


export default function DateComponent({item, style}:{item: TTemplate | TSession, style: StyleProp<ViewStyle>}){
    if (item.date){
        return (
          <View style ={style}>
            <MaterialIcons name="date-range" size={15} color="grey" style={{bottom: 5,marginLeft: 10}} />
           <Text style={styles.textDate}>{item.date}</Text>
          </View>
        )
    }else{
        return <View></View>
    }
}

export function DurationComponent({item, style}:{item: TSession, style: StyleProp<ViewStyle>}){
    if (item.date){
        return (
          <View style = {style}>
            <AntDesign name="clockcircle" size={15} color="grey" style={{bottom: 5,marginLeft: 10}}/>
           <Text style={styles.textDate}>{item.duration}</Text>
          </View>
        )
    }else{
        return <View></View>
    }

}