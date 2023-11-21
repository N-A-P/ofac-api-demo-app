/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {RootNavigation} from './src/navigation';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.root}>
      <RootNavigation />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
