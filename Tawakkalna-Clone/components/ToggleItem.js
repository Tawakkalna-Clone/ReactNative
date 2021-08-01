import React, { useState } from 'react'
import { View, Text, Switch, Image,TouchableOpacity } from 'react-native'

export default function ToggleItem(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#1c1b1b', flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
                <Switch
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', paddingRight: 10 }}>{props.name}</Text>
                    <Image source={props.icon} style={{ width: 30, height: 30, marginHorizontal: 15 }} />
                </View>
            </View>
        </View>
    )
}
