import * as React from 'react';
import { View, I18nManager, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import Services from './screens/Services';
import MyAccount from './screens/MyAccount';

const Tab = createBottomTabNavigator();

export default function App() {
  I18nManager.forceRTL(true);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "الرئيسية") {
              iconName = focused
                ? require("./Assets/icons/active/home.png")
                : require("./Assets/icons/notActive/home.png");
            } else if (route.name === "المحفظة الرقمية") {
              iconName = focused
                ? require("./Assets/icons/active/wallet.png")
                : require("./Assets/icons/notActive/wallet.png");
            } else if (route.name === "الخدمات") {
              iconName = focused
                ? require("./Assets/icons/active/ServicesActive.png")
                : require("./Assets/icons/notActive/services.png");

            } else if (route.name === "لوحة البيانات") {
              iconName = focused
                ? require("./Assets/icons/active/dashboard.png")
                : require("./Assets/icons/notActive/dashboard.png");
            } else if (route.name === "حسابي") {
              iconName = focused
                ? require("./Assets/icons/active/myAccount.png")
                : require("./Assets/icons/notActive/myAccount.png");
            }

            return (
              <View style={styles.container}>
                <View >
                  <Image source={iconName} style={{ width: 25, height: 25 }} />
                </View>

              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#23AA9C",
          inactiveTintColor: "#808080",
        }}
      >
        <Tab.Screen name="الرئيسية" component={HomeScreen} />
        <Tab.Screen name="الخدمات" component={Services} />
        <Tab.Screen name="المحفظة الرقمية" component={HomeScreen} />
        <Tab.Screen name="لوحة البيانات" component={HomeScreen} />
        <Tab.Screen name="حسابي" component={MyAccount} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

