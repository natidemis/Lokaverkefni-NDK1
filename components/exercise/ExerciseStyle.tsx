import {StyleSheet } from 'react-native';


export const ExerciseStyles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  alphabetList: {
    display: 'flex',
    flexDirection: 'row',
    width: '105%',
    height: '80%',
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 0,
    paddingBottom: 0,
    alignItems: "baseline",

  },
  modalView: {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
    alignItems: "baseline",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  text: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textView: {
    display:'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FBFBFB',
    paddingTop: 7,
    height: 30,
    marginBottom: 5,
  },
  title: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  titleView: {
      display:'flex',
      flexDirection: 'row',
      width: '100%',
      borderTopColor: 'grey',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginBottom: 5,
      backgroundColor:'white'
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 5,
    paddingTop: 8,
    backgroundColor: "#90EE90"
  },

  btnTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    height: 30,
  },
  startBtnView: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'flex-start'
  }
});
