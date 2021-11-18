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
      width: '95%',
      margin: 0,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "baseline",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },
    buttonsView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-evenly',
      marginTop: 40,
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
    exerciseHeaderStyle: {
      flex: 0,
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: "space-around",
    },
    exerciseSetStyle: {
      flex: 0,
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: "space-around",
      width: '95%',
      marginBottom: 10,
      height: 40,
      backgroundColor: '#ffffff',

    },
    exerciseStyle: {
      flex: 1,
      flexDirection: 'row',
    },
    setInput: {
      backgroundColor:'#E1E1E1',
      width: 40,
      height: 40,
      borderRadius: 5,
      opacity: 1,
      color: 'black',
      marginLeft: "10%",
      padding: 5,
    },

    prevText: {
      marginLeft: "15%",
      marginRight: "2%",
      fontSize: 17,
    },
    prevTextView: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      paddingTop: '3%',
    },
    rowId: {
      marginLeft: "15%",
      fontWeight: 'bold',
      fontSize: 17,
    },
    rowIdView: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    setButton: {
      width: '100%',
      height: 25,
      borderRadius: 5,
      padding: 3,
      elevation: 2,
      backgroundColor: "black",
    },
    setButtonsView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-evenly',
      marginTop: 10,
      marginBottom: 10,
      width: '99%',
    },
    hiddenButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '60%',
      height: 39,
      borderRadius: 0,
      padding: 10,
      elevation: 2,
      backgroundColor: "#FF7F7F",
    },
    hiddenButtonView: {
      display: 'flex',
      flexDirection: 'row',
      width: '90%',
      justifyContent: 'flex-end',
    }
  })