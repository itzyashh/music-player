import { StatusBar } from 'expo-status-bar';

import MainNavigation from './src/navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TrackPlayer, {Capability} from 'react-native-track-player';
import { useEffect } from 'react';
import service from './src/service';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {

  useEffect(() => {
    async function setup() {
      await TrackPlayer.setupPlayer()
      TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
        ],
    
        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext, Capability.SkipToPrevious],
        notificationCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext, Capability.SkipToPrevious],
  
    });
    }
    setup()
    }
    , [])

  // AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => service);
return (
  <GestureHandlerRootView style={{flex: 1}}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
  <SafeAreaProvider>
    <MainNavigation />
    <StatusBar style="auto" />
  </SafeAreaProvider>
  </PersistGate>
  </Provider>
  </GestureHandlerRootView>
);
}
