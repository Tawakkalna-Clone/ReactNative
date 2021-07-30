import React from 'react'
import { View } from 'react-native'
import Item from './SettingItem'
import Toggle from './ToggleItem'

export default function AccountSetting() {
    return (
        <View style={{ borderRadius: 30, flex: 1.5, width: "95%" }}>
            <Item name='اللغة' icon={require('../Assets/Language.png')} />
            <Item name='تحديث رقم الجوال' icon={require('../Assets/UpdatePHONE.png')} />
            <Item name='تغيير كلمة المرور' icon={require('../Assets/UpdatePassword.png')} />
            <Item name='تحديث موقع السكن' icon={require('../Assets/UpdateHomeAddress.png')} />
            <Toggle name='إظهار الصورة الشخصية' icon={require('../Assets/PersonalPicture.png')}></Toggle>
        </View>
    )
}

