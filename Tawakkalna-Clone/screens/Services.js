import React from 'react'
import { View, Text, I18nManager, ScrollView } from 'react-native'
import Page3Card from '../components/Page3Card'
export default function Services() {

    return (

        <View style={{ flex: 1, backgroundColor: "#0f1217" }}>
            <ScrollView>

                <View style={{ flex: 1, marginLeft: 20 }}>

                    <View style={{ flex: 1, marginTop: 80 }}>
                        <Text style={{ color: "#343635", fontSize: 22, textAlign: 'left', marginBottom: 5 }}>
                            الخدمات العامة</Text>
                        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                            <Page3Card name="here" url1={require("../Assets/Ask.png")}></Page3Card>
                        </View>
                    </View>

                    <View style={{ flex: 2, }}>
                        <Text style={{ color: "#343635", textAlign: "left", fontSize: 22, marginBottom: 5, marginTop: 25 }}>
                            خدمات التصاريح  </Text>
                        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                            <Page3Card name="here" url1={require("../Assets/Ask.png")}></Page3Card>

                            <Page3Card name="here" url1={require("../Assets/Ask.png")}></Page3Card>

                            <Page3Card name="here" url1={require("../Assets/Ask.png")}></Page3Card>

                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "#343635", textAlign: "left", fontSize: 22, marginBottom: 5, marginTop: 25 }}>
                            خدمات الصحة  </Text>
                        <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                            <Page3Card name="here" url1={require("../Assets/Ask.png")}></Page3Card>

                            <Page3Card name="here" url1={require("../Assets/Ask.png")}></Page3Card>
                            <Page3Card name="here" url1={require("../Assets/Ask.png")}></Page3Card>

                            <Page3Card name="here" url1={require("../Assets/Ask.png")}></Page3Card>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View >
    )
}
