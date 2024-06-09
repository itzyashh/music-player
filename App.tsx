import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TrackPlayer from 'react-native-track-player';
import { useEffect } from 'react';
import service from './src/service';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  useEffect(() => {
    async function setup() {
      await TrackPlayer.setupPlayer()

    }
    setup()
    }
    , [])

  // AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => service);
return (
  <GestureHandlerRootView style={{flex: 1}}>
  <SafeAreaProvider>
    <MainNavigation />
    <StatusBar style="auto" />
  </SafeAreaProvider>
  </GestureHandlerRootView>
);
}
