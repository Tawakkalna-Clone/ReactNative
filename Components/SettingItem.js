import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SettingItem(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#1C1B1B', flexDirection: 'row',justifyContent: 'space-between',padding:15,alignItems:'center'}}>
                    <Ionicons name={props.icon} size={30} color="white"></Ionicons>
                    <View style={{ flexDirection: 'row' , alignItems:'center'}}>
                        <Text style={{ color: 'white' ,paddingRight:10}}>{props.name}</Text>
                        <Ionicons name="aperture" size={40} color="white"></Ionicons>
                    </View>
                </View>
            </View>
        </View>
    )
}
