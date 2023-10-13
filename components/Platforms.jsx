import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'

const Platforms = () => {
  return (
    <View>
      <Text style = {styles.heading}>Platforms</Text>
      <View>
        {
            Platform.OS === 'ios' ? <View style = {styles.box}> </View> : <View style = {styles.box2}></View>
        }
      </View>
      <Text>{JSON.stringify(Platform)}</Text>
    </View>
  )
}

export default Platforms

const styles = StyleSheet.create({
    heading : {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        color: 'darkblue'
    },
    box : {
        width: 200,
        height: 200,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center'
    },
    box2 : {
        width: 200,
        height: 200,
        backgroundColor: 'greenyellow',
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center'
    }
    
})