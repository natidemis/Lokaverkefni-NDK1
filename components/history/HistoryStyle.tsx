import { StyleSheet } from "react-native";
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";

export const historyStyle = StyleSheet.create({
    container: {
      flexDirection: 'column',
      top: 0,
      padding: 0,
      width: '100%'
    },
    sessionHist: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      width: '70%',
      borderRadius: 10,
      marginTop: 0,
      padding: 5,

      marginBottom: 15,
      marginLeft: '15%',
      justifyContent: 'center'
    },
    dateView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'flex-start',
      marginTop: 10,
      marginBottom: 0,
      width: '90%',
    },
    durationView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'flex-start',
        marginTop: 10,
        marginBottom: 0,
        width: '90%',
      },
      exercisesList: {
          display: 'flex',
          flexDirection:'column',
          justifyContent:'flex-start',
          flex: 1,
      },
      exercisesSetsList: {
        flex: 1,
        display: 'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    historySection: {
        display: 'flex',
        flexDirection: 'row',
    }
  });
  
  
  export const historyModalStyle = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      display: 'flex',
      flexDirection: 'column',
      width: '95%',
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.4,
      shadowRadius: 4,
    },
    buttonsView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-evenly',
      marginTop: 20,
      width: '90%',

    },
    button: {
      width: 100,
      height: 40,
      borderRadius: 5,
      padding: 10,
      elevation: 2,
    },
    buttonStart: {
      backgroundColor: "#90EE90"
    },
    buttonClose: {
      backgroundColor: "#FF7F7F"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      height: 30,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    dateView: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 0,
      marginBottom: 10,
    },
  })