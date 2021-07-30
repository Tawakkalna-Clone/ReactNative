import React, { useState } from 'react'
import { View, Text, Switch ,Image } from 'react-native'

export default function ToggleItem(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
                <Switch
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', paddingRight: 10 }}>{props.name}</Text>
                    <Image source={props.icon} style={{width:30,height:30}}/>
                </View>
            </View>
        </View>
    )
}
