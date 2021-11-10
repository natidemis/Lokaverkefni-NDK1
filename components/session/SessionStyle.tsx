import { StyleSheet } from "react-native"
export const sessionStyle = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.9,
      shadowRadius: 4,
    },
    buttonsView: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      height: 0,
      backgroundColor: 'red',
    },
    button: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      height: 30,
    },
    buttonOpen: {
      backgroundColor: "red",
    },
    buttonClose: {
      backgroundColor: "black",
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
    }
  })