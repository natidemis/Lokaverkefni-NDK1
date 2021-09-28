import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';





function CounterButton({ title, onIncrement, color}) {
  return <Button color = {color} title={title} onPress={onIncrement} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
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
      <StatusBar style="auto" />
    </View>
  );
}
