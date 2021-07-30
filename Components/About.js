import React from 'react'
import { View } from 'react-native'
import Item from './SettingItem'

export default function About() {
    return (
        <View style={{ flex: 1 }}>
            <Item name='شركاء النجاح' icon={require('../assets/Success.png')} />
            <Item name='الأسئلة الشائعة' icon={require('../assets/Faqs.png')} />
            <Item name='تواصل معنا' icon={require('../assets/Contactus.png')} />
        </View>
    )
}
