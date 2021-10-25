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
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  title: {
    color: '#000000',
    fontSize: 22,
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
  },
});



export default styles