import React from 'react'
import { View } from 'react-native'
import Item from './SettingItem'
import Toggle from './ToggleItem'

export default function AccountSetting() {
    return (
        <View style={{ borderRadius:30 , flex: 1.5}}>
            <Item name='اللغة' icon={require('../assets/Language.png')}/>
            <Item name='تحديث رقم الجوال' icon={require('../assets/UpdatePHONE.png')}/>
            <Item name='تغيير كلمة المرور' icon={require('../assets/UpdatePassword.png')}/>
            <Item name='تحديث موقع السكن' icon={require('../assets/UpdateHomeAddress.png')}/>
            <Toggle name='إظهار الصورة الشخصية' icon={require('../assets/PersonalPicture.png')}></Toggle>
        </View>
    )
}

