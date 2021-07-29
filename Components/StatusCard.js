import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

let {bp, vw, vh} = require('react-native-relative-units')(375);

export default function StatusCard() {
    return (
        <View>
            <LinearGradient style={styles.Profilestatus} colors={['#004319', '#006128', '#036d2f']}>
                <View><Image style={styles.refreshicon} source={require('./Assets/refresh-2-xxl.png')}/></View>
                <View>
                    <Text style={styles.statusTextt}>{`محصن`}</Text>
                    <Text style={styles.statusTextt}>{`أكمل جرعات لقاح كورونا (كوفيد-19)`}</Text>
                    <Text style={styles.statusTextt}>{`آخر تحديث: الأربعاء 28 يوليو, 10:35 ص`}</Text>
                </View>
                <View>
                    <Image style={styles.qrcode} source={require('./Assets/qrcode.png')}/>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    Profilestatus: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 85 * vw,
        height: 12 * vh,
        backgroundColor: 'green',
        borderRadius: 15,
    },
    refreshicon: {
        resizeMode: 'contain',
        width: 4 * vw
    },
    qrcode: {
        resizeMode: 'contain',
        width: 20 * vw

    },
    statusTextt: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10
    }

})
