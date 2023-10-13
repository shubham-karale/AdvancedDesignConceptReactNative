import { StyleSheet,View,Button,ActivityIndicator } from 'react-native'
import React,{useState} from 'react'

 function ActivityIndicatorTest() {
  const [show,setShow] = useState(false)

  // What is the below code is do
  const display = () => {
    setShow(true)
    setTimeout(()=>{
      setShow(false)
    },3000)
  }

  return (
    <View>
      {/* <ActivityIndicator size = 'small' color = 'red' />
      <ActivityIndicator size = 'medium' color = 'blue' />
      <ActivityIndicator size = 'large' color = 'purple' /> */}
      <ActivityIndicator size = '100' color = 'yellowgreen' animating = {show} />
      <Button title = 'Show' onPress = {display} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ActivityIndicatorTest