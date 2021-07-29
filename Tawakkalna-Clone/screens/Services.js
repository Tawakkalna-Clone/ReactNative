import React from 'react'
import { View, Text, I18nManager } from 'react-native'

export default function Services() {

    return (
        <View style={{ flex: 10 }}>

            <View style={{ flex: 2, marginTop: 100, marginLeft: 30 }}>
                <Text style={{ color: "white", fontSize: 22, textAlign: 'left' }}>
                    الخدمات العامة</Text>
                <View style={{ flexWrap: "wrap", flexDirection: "row" }}>

                    <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                    </View>
                </View>

            </View>

            <View style={{ flex: 2, marginLeft: 30 }}>
                <Text style={{ color: "white", textAlign: "left", fontSize: 22 }}>
                    الخدمات العامة</Text>
                <View style={{ flexWrap: "wrap", flexDirection: "row" }}>

                    <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                    </View>
                </View>

            </View>
        </View>
    )
}
