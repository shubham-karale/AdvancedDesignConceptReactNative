import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const CustomRadioPractice1 = () => {
    const [selected, setSelected] = useState(1)
  return (
    <View>
      <TouchableOpacity onPress = {()=>setSelected(1)} >
        <View style = {styles.radioBox}>
            <View style = {styles.radio}>
                {
                    selected==1 ?  <View style = {styles.radioBg}></View> : null
                }
            </View>
            <Text>OPtion 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelected(2)}>
        <View style = {styles.radioBox}>
            <View style = {styles.radio}>
                {
                    selected==2 ?  <View style = {styles.radioBg}></View> : null
                }
            </View>
            <Text>OPtion 1</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default CustomRadioPractice1

const styles = StyleSheet.create({
    radioBox : {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
      },
      radio : {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      radioBg : {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000'
    }
})