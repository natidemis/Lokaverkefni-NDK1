import { Pressable, ScrollView, View } from "react-native";
import { TSession } from "../../data/types";
import { historyStyle } from "./HistoryStyle";
import React from "react";
import { HistoryExercise, HistoryHeader, HistorySets } from "./HistoryComponents";


export default function HistoryComponent({history}: {history: TSession[]}){


    return (
        <ScrollView contentContainerStyle={historyStyle.container}>
            {history ? history.map((session: TSession, i) => {
                return (
                  <Pressable key={i} onPress={() => {
                      //do something
                  }}
                  >
                    <View style={historyStyle.sessionHist}>
                        <HistoryHeader session={session} />
                        <View style={historyStyle.historySection}>
     
                            <HistoryExercise info={session.info} />
                            <HistorySets info={session.info} />
                        </View>
                    </View>
                  </Pressable>
                )
            }): null}
        </ScrollView>
    )
}