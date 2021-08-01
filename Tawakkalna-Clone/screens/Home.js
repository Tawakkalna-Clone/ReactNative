import * as React from 'react';
import { Image, Text, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import StatusCard from '../components/StatusCard';
import ServiceList from '../components/ServiceList';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: "#0f1217"  }}>
            <View style={{ flex: 0.3, alignSelf: "flex-end", marginTop: 30, marginRight: 20 }}>
                <View style={{ }}>
                    <Image style={{resizeMode: 'contain', width: 20}} source={require('../Assets/Ring.png')}/>
                </View>
            </View>
            <ProfileCard/> 
            <StatusCard/>    
            <ServiceList navigation={navigation}/>
   
        </View>
    );
}