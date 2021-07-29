import * as React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginTop:50, height:50,width:'100%',backgroundColor: 'red', justifyContent: 'left'}}>
                <View style={{ marginLeft:10 ,height:50,width:50, backgroundColor: 'blue'}}>
                    <Text>jrs22</Text>

                </View>
            </View> 
            <View style={{flex:3, marginTop: 20 ,backgroundColor: 'red',width:'100%'}}>
                <Text>jrs</Text>
            </View>
            <View style={{flex:2, marginTop: 20 ,backgroundColor: 'yellow',width:'100%'}}>
                <Text>jrs</Text>
            </View>
            <View style={{flex:2, marginTop: 20 ,backgroundColor: 'yellow',width:'100%'}}>
                <Text>jrs</Text>
            </View>
        </View>
    );
  }