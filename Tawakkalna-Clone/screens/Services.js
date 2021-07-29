import React from 'react'
import { View, Text, I18nManager, ScrollView } from 'react-native'

export default function Services() {

    return (

        <View style={{ flex: 1, backgroundColor: "#1c1c1c" }}>
            <ScrollView>
                <View style={{ flex: 1, marginTop: 80, marginLeft: 30 }}>
                    <Text style={{ color: "white", fontSize: 22, textAlign: 'left', marginBottom: 5 }}>
                        الخدمات العامة</Text>
                    <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                        <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 2, marginLeft: 30 }}>
                    <Text style={{ color: "white", textAlign: "left", fontSize: 22, marginBottom: 5, marginTop: 25 }}>
                        خدمات التصاريح  </Text>
                    <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                        </View>
                        <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                        </View>
                        <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, marginLeft: 30 }}>
                    <Text style={{ color: "white", textAlign: "left", fontSize: 22, marginBottom: 5, marginTop: 25 }}>
                        خدمات الصحة  </Text>
                    <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                        </View>
                        <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                        </View>
                        <View style={{ height: 150, width: 150, backgroundColor: "white" }}>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
