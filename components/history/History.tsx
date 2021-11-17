import { Pressable, ScrollView, View } from "react-native";
import { TSession } from "../../data/types";
import { historyStyle } from "./HistoryStyle";
import React from "react";
import { HistoryExercise, HistoryHeader, HistorySets } from "./HistoryComponents";


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
                        <View style={historyStyle.historySection}>
                            <HistoryExercise exercises={session.exercises} />
                            <HistorySets exercises={session.exercises} />
                        </View>
                    </View>
                  </Pressable>
                )
            })}
        </ScrollView>
    )
}