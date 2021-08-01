import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

let {bp, vw, vh} = require('react-native-relative-units')(375);

var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
              "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

var days =["اﻷحد","اﻷثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];

var date = new Date();

console.log("The current month is " + months[date.getMonth()]);
console.log("The current day is " + days[date.getDay()]);

var newdate =days[date.getDay()]+' '+ date.getDate()+ ' ' +  months[date.getMonth()]  +', ' + date.toLocaleTimeString() ;
// var newdate =date.toLocaleDateString()+ date.toLocaleTimeString();

export default function StatusCard() {
    return (
        <View style={{ flexDirection:'row',justifyContent:'center'}}>
            <LinearGradient style={styles.Profilestatus} colors={['#004319', '#006128', '#036d2f']}>
                <View>
                    <Image style={styles.qrcode} source={require('../Assets/qrcode.png')}/>
                </View>
                <View>
                    <Text style={styles.statusTextt}>{`محصن`}</Text>
                    <Text style={styles.statusTextt}>{`أكمل جرعات لقاح كورونا (كوفيد-19)`}</Text>
                    <Text style={styles.statusTextt}>{` آخر تحديث: ` + newdate}</Text>
                </View>
                <View><Image style={styles.refreshicon} source={require('../Assets/refresh-2-xxl.png')}/></View>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    Profilestatus: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 90 * vw,
        height: 20 * vh,
        backgroundColor: 'green',
        borderRadius: 15,
        marginTop: 30,
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
        fontSize:12,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10
    }

})
