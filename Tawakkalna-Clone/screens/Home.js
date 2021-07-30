import * as React from 'react';
import { Text, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import StatusCard from '../components/StatusCard';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: "#0f1217"  }}>
            <View style={{ marginTop: 50, height: 50, width: '100%', flexDirection: 'row-reverse' }}>
                <View style={{ marginRight: 50, height: 50, width: 50, backgroundColor: 'blue' }}>
                </View>
            </View>
            <ProfileCard/> 

            {/* <View style={{ flex: 3, marginTop: 20, backgroundColor: 'red', width: '90%' }}>
                <View style ={{}}>

                </View>

            </View> */}

            <StatusCard/>
            {/* <View style={{ flex: 2, marginTop: 20, backgroundColor: 'yellow', width: '100%' }}>
            </View> */}
            <View style={{ flex: 2, marginTop: 20, backgroundColor: 'yellow', width: '100%' }}>
                <Text>jrs</Text>
            </View>
        </View>
    );
}