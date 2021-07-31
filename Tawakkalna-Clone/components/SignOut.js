import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
export default function SignOut() {
    return (
        <View>
            <View style={{
                flex: 0.5, justifyContent: "center",
                alignItems: "center"
            }}>
                <TouchableOpacity style={styles.button}><Text style={styles.text} >تسجيل الخروج</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: '95%',
        borderRadius: 7,
        backgroundColor: '#c73f3f',
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});