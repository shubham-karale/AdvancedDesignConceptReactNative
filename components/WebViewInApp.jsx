import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const WebViewInApp = () => {
  return (
    <View>
      <Text style = {styles.heading}>WebViewInApp</Text>
      <WebView source={{uri: 'https://www.jiocinema.com/'}} />
    </View>
  )
}

export default WebViewInApp

const styles = StyleSheet.create({
    heading : {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        color: 'darkblue'
    },
    
})