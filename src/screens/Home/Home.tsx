import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/colors'
import { header } from '../../constants/style'
import { LinearGradient } from 'expo-linear-gradient'

const Home = () => {
  return (
    <LinearGradient
    colors={[colors.gradient2, colors.gradient1opacity]}
    start={{ x: 0.1, y: 0.1 }}
    end={{ x: 0.9, y: 0.9 }}
    locations={[0.1, 0.9]}
    style={styles.root}>
    <View style={styles.container}>
    
        <Text style={styles.text}>Home</Text>

    </View>
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    marginTop: header.height
  },
  text: {
    color: colors.text
  }
})