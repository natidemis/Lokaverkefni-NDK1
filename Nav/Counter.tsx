import { Button, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles';

function CounterButton({ title, onIncrement, color}) {
    return <Button color = {color} title={title} onPress={onIncrement} />
}



const Counter = ({navigation}) => {
    const [count, setCount] = useState(0)
    const [restore, setRestore] = useState(true)
    useEffect(() => {
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
          if(value !== null) {
            setCount(Number.parseInt(value))
          }
        } catch(e) {
          console.log(e)
        }
      }
      if(restore) {
        getData()
        setRestore(false)
      }
    }, [restore])
    var btnColor = 'cyan'
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('@storage_Key', (count + 1).toString())
        btnColor = 'cyan'
        console.log()
      } catch (e) {
        // saving error
        setCount(count - 1)
        btnColor = 'red'
      } finally{
        setCount(count+1)
      }
    }
  
    return (
      <View style={styles.container}>
        <Text>Count: {count}</Text>
        <CounterButton
          color = {btnColor}
          title="Increase count"
          onIncrement={function(){
            storeData()
          }}
        />
        <Button
          title = "Go to Hello World"
          onPress = {() => navigation.navigate('Hello World')}
        />
        <StatusBar style="auto" />
      </View>
    );
  }

  export default Counter