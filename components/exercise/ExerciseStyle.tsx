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
    backgroundColor: '#EFEFEF',
    paddingTop: 7,
    height: 30,
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
  },

});