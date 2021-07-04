import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from './navigation';

export default function App() {
  return (
      <SafeAreaView>
        <Navigation colorScheme={'dark'}></Navigation>
      </SafeAreaView>
  );
}
