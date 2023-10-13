import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
 function CustomRadioButtons() {

    const [selected, setSelected] = useState(1)

  return (
    <View>
      <TouchableOpacity onPress = {()=>{setSelected(1)}}  >
        <View style = {styles.radioBox}>
          <View style = {styles.radio}>
          {
            selected==1 ?  <View style = {styles.radioBg}></View> : null
          }
          </View>
          <Text style = {styles.radioText}>Option 1</Text>
        </View>
       
      </TouchableOpacity>

      <TouchableOpacity onPress = {()=>{setSelected(2)}}>
        <View style = {styles.radioBox}>
          <View style = {styles.radio}>
          {
            selected==2 ?  <View style = {styles.radioBg}></View> : null
          }
          </View>
          <Text style = {styles.radioText}>Option 2</Text>
        </View>
      </TouchableOpacity>


    </View>
  )
}



export default CustomRadioButtons