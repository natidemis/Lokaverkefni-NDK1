import { Pressable, ScrollView, View } from "react-native";
import { TSession } from "../../data/types";
import { historyStyle } from "./HistoryStyle";
import { Text } from 'react-native'
import styles from "../../Styles";
import React from "react";
import DateComponent, { DurationComponent } from "../Misc/date";


const HistoryHeader = ( {session}: {session: TSession}) => {
    return(
        <React.Fragment>
          <Text
            style={[styles.title, {fontSize: 18}]}
            numberOfLines={1}>
            {session.title}
          </Text>
          <DateComponent style={historyStyle.dateView} item={session}/>
          <DurationComponent style={historyStyle.durationView} item={session} />
        </React.Fragment>
    )
}

export default function HistoryComponent({sessions}: {sessions: TSession[]}){


    return (
        <ScrollView contentContainerStyle={historyStyle.container}>
            {sessions.map((session, i) => {
                return (
                  <Pressable key={i} onPress={() => {
                      //do something
                  }}
                  >
                    <View style={historyStyle.sessionHist}>
                        <HistoryHeader session={session} />

                    </View>
                  </Pressable>
                )
            })}
        </ScrollView>
    )
}