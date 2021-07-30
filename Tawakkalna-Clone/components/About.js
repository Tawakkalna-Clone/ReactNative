import React from 'react'
import { View } from 'react-native'
import Item from './SettingItem'

export default function About() {
    return (
        <View style={{ flex: 1, width: '95%' }}>
            <Item name='شركاء النجاح' icon={require('../Assets/Success.png')} />
            <Item name='الأسئلة الشائعة' icon={require('../Assets/Faqs.png')} />
            <Item name='تواصل معنا' icon={require('../Assets/Contactus.png')} />
        </View>
    )
}
