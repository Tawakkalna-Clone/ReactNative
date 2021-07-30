import React from 'react'
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SettingItem(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: '#1C1B1B', flexDirection: 'row', justifyContent: 'space-between',
                    padding: 15, alignItems: 'center', borderBottomWidth: 1, borderColor: '#343635'
                }}>
                    <Ionicons name="chevron-down" size={30} color="white"></Ionicons>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', paddingRight: 10 }}>{props.name}</Text>
                        <Image source={props.icon} style={{ width: 30, height: 30, marginHorizontal: 15 }} color="white"></Image>
                    </View>
                </View>
            </View>
        </View>
    )
}
