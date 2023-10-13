import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
function DynamicRadioButtons() {

 const [selected,setSelected] = useState(1)
    let skills = [
        {id:1, name:'HTML'},
        {id:2, name:'CSS'},
        {id:3, name:'JS'},
        {id:4, name:'React'},
        {id:5, name:'Node'},
        {id:6, name:'Express'},
        {id:7, name:'MongoDB'},
    ]


  return (
    <View>
      {
        skills.map((item, index) => <TouchableOpacity key = {index} onPress = {()=>{setSelected(item.id)}}  >
        <View style = {styles.radioBox}>
          <View style = {styles.radio}>
          {
            selected==item.id ?  <View style = {styles.radioBg}></View> : null
          }
          </View>
          <Text style = {styles.radioText}>{item.name}</Text>
        </View>
       
      </TouchableOpacity>)
      }
    </View>
  )
}
const styles = StyleSheet.create({
    radio : {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      radioText : {
        fontSize: 16,
        marginLeft: 16,
        fontWeight: 'bold'
      },
      radioBox : {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
      },
      radioBg : {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000',
      }
})


export default DynamicRadioButtons