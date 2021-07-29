import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import WishListScreen from "./screens/WishListScreen";

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <WishListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
