import React from "react";
import { Pressable, View, Text } from "react-native";
import { TTemplate } from "../../data/types";
import { Animations } from "../Misc/animations";
import { templateModalStyle } from "./TemplateStyles";

export default function TemplateModalButtons ({setAnimation,
                                onChange,
                                modalVisible,
                                activeTemplate} :
                                {setAnimation: Function,
                                 onChange: Function,
                                 modalVisible: boolean,
                                 activeTemplate: TTemplate
                                }
    )  {
    return (
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
    )
}