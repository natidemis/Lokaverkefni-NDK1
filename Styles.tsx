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
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
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



export default styles