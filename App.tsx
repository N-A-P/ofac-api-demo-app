/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {RootNavigation} from './src/navigation';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {Provider} from 'react-redux';
// import {redux_store} from './src/store';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        {/* <Provider store={redux_store}> */}
        <RootNavigation />
        {/* </Provider> */}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
