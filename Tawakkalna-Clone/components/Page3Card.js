import React from 'react'
import { View, Text, Image } from 'react-native'
//import Icon from 'react-native-vector-icons/FontAwesome5'
var { bp, vw, vh } = require('react-native-relative-units')(375);
export default function Page3Card(props) {
    // var u = `../assets/${props.url1}.png`
    // console.log(u)
    return (
        <View style={{ backgroundColor: "#1c1c1e", height: 20 * vh, width: 28.5 * vw, borderRadius: 15, margin: 5 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Image
                    style={{
                        width: 40,
                        height: 40,
                    }}
                    source={props.url1}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}> {props.name}</Text>
            </View>
        </View>
    )
}