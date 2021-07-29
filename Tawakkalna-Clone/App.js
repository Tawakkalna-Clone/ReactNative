import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, I18nManager } from 'react-native';
import Services from './screens/Services';
export default function App() {
  I18nManager.forceRTL(true);
  return (
    <View style={styles.container}>
      <Services />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c'
  },
});
