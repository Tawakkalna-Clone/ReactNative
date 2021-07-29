import * as React from 'react';
import { Text, View ,I18nManager } from 'react-native';

export default function MyAccountScreen() {
    I18nManager.forceRTL(true);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:"#1c1c1c" }}>
            <View style={{flex:3, marginTop: 40 ,backgroundColor: 'red',width:'100%'}}>
                <Text>jrs</Text>
            </View>
            <View style={{flex:3, marginTop: 20 ,backgroundColor: 'yellow',width:'100%'}}>
                <Text>jrs</Text>
            </View>
            <View style={{flex:1.5, marginTop: 20 ,backgroundColor: 'yellow',width:'100%'}}>   
            <Text>jrs</Text>             
            </View>
        </View>
    );
  }