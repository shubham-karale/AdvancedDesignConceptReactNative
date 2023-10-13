import { StyleSheet, Text, View,Button,Modal } from 'react-native'
import React from 'react'

const ModalBox = () => {
  return (
    <View style = {styles.container}>
        
        <Modal transparent = {true}>
            <View style = {styles.centerView}>
            <View style = {styles.modalBox}>
                <Text style = {styles.text}>Modal Box</Text>

            </View>

            </View>
            
        </Modal>
        <View style = {styles.btnStyle}>
        <Button title = "Open Modal" />
        </View>
    </View>
  )
}

export default ModalBox

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBox : {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5
    },
    text : {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnStyle : {
        width: 200,
        height: 50,
        backgroundColor: 'darkblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})