import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
return (
  <SafeAreaProvider>
    <MainNavigation />
    <StatusBar style="auto" />
  </SafeAreaProvider>
);
}
