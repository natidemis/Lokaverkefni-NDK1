import { Pressable, ScrollView } from "react-native";
import { TSession } from "../../data/types";
import { historyStyle } from "./HistoryStyle";
import { Text } from 'react-native'
import styles from "../../Styles";
import React from "react";
import DateComponent from "../Misc/date";



export default function HistoryComponent({sessions}: {sessions: TSession[]}){


    return (
        <ScrollView contentContainerStyle={historyStyle.container}>
            {sessions.map((session, i) => {
                return (
                  <Pressable key={i} onPress={() => {
                      //do something
                  }}
                  >
                    <ScrollView style={historyStyle.sessionHist} key={i}>
                      <Text
                         key={i}
                        style={[styles.title, {fontSize: 18}]}
                        numberOfLines={1}>
                        {session.title}
                      </Text>
                      <DateComponent item={session} key={i}/>
                    </ScrollView>
                  </Pressable>
                )
            })}
        </ScrollView>
    )
}