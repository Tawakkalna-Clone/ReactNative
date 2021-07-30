import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import AccountSetting from '../components/AccountSetting';
import About from '../components/About';
export default function MyAccountScreen() {

    return (
        <View style={{ flex: 1, backgroundColor: "#0f1217" }}>
            <ScrollView>
                <View style={{ flex: 1, marginLeft: 20 }}>

                    <Text style={{ color: "white", fontSize: 22, textAlign: 'left', marginTop: 80, marginBottom: 5 }}>
                        إعدادات الحساب</Text>
                    <AccountSetting />
                </View>

                <View style={{ flex: 1, marginLeft: 20 }}>

                    <Text style={{ color: "white", fontSize: 22, textAlign: 'left', marginTop: 50, marginBottom: 5 }}>
                        حول التطبيق</Text>
                    <About />
                </View>
                <View style={{ flex: 1, alignItems: "center", marginTop: -40 }}>
                    <Image style={{ resizeMode: 'contain', width: "80%" }} source={require('../Assets/Logo-2.png')} />
                    <Text style={{ color: "#707378", fontSize: 25, textAlign: 'left', marginTop: -30 }}>
                        V 3.0.1</Text>
                </View>
            </ScrollView>
        </View>
    );
}