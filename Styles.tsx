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


export default styles
