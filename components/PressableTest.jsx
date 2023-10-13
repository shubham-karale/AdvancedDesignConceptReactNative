import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

function PressableTest() {
  return (
    <View>
      <Text style = {styles.heading}>PressableTest</Text>
      <Pressable style = {styles.btn} onPress={()=>console.warn("Normal Press")} onLongPress={()=>console.warn("Long Press")} onPressOut={()=>console.warn("Press Out Press")} >
            <Text style = {styles.btnText}>Click Here</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    heading : {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 29,
        color: 'darkblue'
    },
    btn : {
        width: 200,
        height: 50,
        backgroundColor: 'darkblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 29,
        alignSelf: 'center',
        marginTop: 56,

    },
    btnText : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default PressableTest