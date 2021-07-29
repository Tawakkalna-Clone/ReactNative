import * as React from 'react';
import { Text, View, I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import Services from './screens/Services';
import MyAccount from './screens/MyAccount';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  I18nManager.forceRTL(true);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return /*<Ionicons name={iconName} size={size} color={color} />*/;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="الرئيسية" component={HomeScreen} />
        <Tab.Screen name="الخدمات" component={Services} />
        <Tab.Screen name="المحفظة الرقمية" component={SettingsScreen} />
        <Tab.Screen name="لوحة البيانات" component={SettingsScreen} />
        <Tab.Screen name="حسابي" component={MyAccount} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


