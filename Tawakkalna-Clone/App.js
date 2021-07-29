import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, Image, ImageBackground, View} from 'react-native';

var {bp, vw, vh} = require('react-native-relative-units')(375);


export default function App() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})
