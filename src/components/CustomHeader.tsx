import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
const CustomHeader = (props) => {
    console.log('props', props)

  return (
    <View style={styles.container}>
        <View style={styles.appLogo}>
        <Image
            source={require('../../assets/sound-waves.png')}
            style={{ width: 25, height: 25 }}
        />
      <Text style={styles.text}>Music</Text>
        </View>
        <View style={styles.iconContainer}>
        <Ionicons name="search-outline" size={25} color="white" />
        <Ionicons name="person-circle-outline" size={24} color="white" />
        </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 90
        },
        appLogo: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            gap: 5
        },
        text: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            letterSpacing: .222
        },
        iconContainer: {
            flexDirection: 'row',
            gap: 20,
            padding: 10
        }
})