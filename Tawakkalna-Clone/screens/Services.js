import React from 'react'
import { View, Text, I18nManager, ScrollView } from 'react-native'
import Page3Card from '../components/Page3Card'
export default function Services() {

    return (

        <View style={{ flex: 1, backgroundColor: "#0f1217" }}>
            <ScrollView>

                <View style={{ flex: 1, marginLeft: 20 }}>

                    <View style={{ flex: 1, marginTop: 80 }}>
                        <Text style={{ color: "white", fontSize: 22, textAlign: 'left', marginBottom: 5 }}>
                            الخدمات العامة</Text>
                        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                            <Page3Card name="تعريف رقم الجوال" url1={require("../Assets/Family.png")}></Page3Card>
                            
                        </View>
                    </View>

                    <View style={{ flex: 2, }}>
                        <Text style={{ color: "white", textAlign: "left", fontSize: 22, marginBottom: 5, marginTop: 25}}>
                            خدمات التصاريح  </Text>
                        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                            <Page3Card name="طلب تصريح جديد" url1={require("../Assets/Request.png")}></Page3Card>

                            <Page3Card name="التصاريح الشخصية" url1={require("../Assets/PersonalPermits.png")}></Page3Card>

                            <Page3Card name="تصاريح التجمع" url1={require("../Assets/Companions.png")}></Page3Card>
                            <Page3Card name="باركود زيارة تجمع" url1={require("../Assets/barcode.png")}></Page3Card>


                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "white", textAlign: "left", fontSize: 22, marginBottom: 5, marginTop: 25 }}>
                            خدمات الصحة  </Text>
                        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                            <Page3Card name="الوضع الحذر" url1={require("../Assets/Caution.png")}></Page3Card>

                            <Page3Card name="فحص كورونا" url1={require("../Assets/CovidTest.png")}></Page3Card>

                            <Page3Card name="اسال عن مساعدة" url1={require("../Assets/Ask.png")}></Page3Card>

                            <Page3Card name="الجواز الصحي" url1={require("../Assets/HealthPassport.png")}></Page3Card>

                            <Page3Card name="لقاح كورونا" url1={require("../Assets/CovVaccine.png")}></Page3Card>

                            <Page3Card name="التبرع بالاعضاء" url1={require("../Assets/Organ.png")}></Page3Card>

                            <Page3Card name="اسعفني" url1={require("../Assets/Ambulance.png")}></Page3Card>

                            <Page3Card name="نداء استغاثه" url1={require("../Assets/SOS.png")}></Page3Card>

                        </View>
                    </View>
                </View>

            </ScrollView>
        </View >
    )
}
