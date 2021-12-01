import { StyleSheet } from "react-native";

export const templateStyle = StyleSheet.create({
    container: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      top: 0,
      padding: 30,
      width: '100%',
    },
    template: {
      backgroundColor: '#ffffff',
      width: 150,
      borderRadius: 10,
      marginTop: 0,
      padding: 5,
      marginBottom: 15
    },
    dateView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-evenly',
      marginTop: 10,
      marginBottom: 0,
      width: '90%',
    }
  });
  
  
  export const templateModalStyle = StyleSheet.create({
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