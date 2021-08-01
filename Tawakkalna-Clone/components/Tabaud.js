import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native'
export default function Tabaud() {
    return (
        <TouchableOpacity  style={styles.touchableOpacity} onPress = {() => {Linking.openURL('https://tabaud.sdaia.gov.sa/');}} >
       <View style={styles.background}>
         <Text style={styles.text} >نشكرك على وعيك بتحميل تطبيق تباعد </Text>
          <Image style={styles.Image} source={require('../Assets/tabaud-logo-white.png')}/>
       </View> 
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    touchableOpacity:{
        justifyContent:'center',
        alignItems:'center',
    },
   background:{
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: '#70cacb',
        width: 360,
        height: 90 ,
        borderRadius:12,
        alignItems:'center',
     },
    text:{
        padding: 20,
        fontSize: 15,
        color: 'white',
        justifyContent:'center',
    },
    Image:{
        position: "absolute",
        top: 40,
        left: 150,
        width: 70,
        height: 50,
       justifyContent:'center',
    }
})