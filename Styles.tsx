import {StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  title: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  templateContainer: {
    flex: 1,
    flexDirection: 'row',
    top: 10,
  },
  template: {
    backgroundColor: '#ffffff',
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
  },
});

export const templateStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    top: 50,
    padding: 30,
  },
  template: {
    backgroundColor: '#ffffff',
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 15,
    padding: 20,
  },
});


export const templateModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {

    width: '90%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5
  },
  buttonsView: {
    display: 'flex',
    height: 100,
    marginBottom: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    width: '50%',
    display: 'flex',
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "black",
    color: 'white',
  },
  textStyle: {
    backgroundColor: 'black',
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
export default styles