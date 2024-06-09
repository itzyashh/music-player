import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
const CustomHeader = (props: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.appLogoContainer}>
        <Image
            source={require('../../assets/sound-waves.png')}
            style={styles.appLogo}
        />
      <Text style={styles.text}>Music</Text>
        </View>
        <View style={styles.iconContainer}>
        <Ionicons name="search-outline" style={styles.icon} onPress={() => props.navigation.navigate('Search')} />
        <Ionicons name="person-circle-outline" style={styles.icon} onPress={() => props.navigation.navigate('Profile')} />
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
        height: verticalScale(90),
        },
        appLogoContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: scale(10),
            gap: moderateScale(5)
        },
        appLogo: {
            width: scale(25),
            height: verticalScale(25),
        },
        text: {
            color: 'white',
            fontSize: moderateScale(20),
            fontWeight: 'bold',
        },
        iconContainer: {
            flexDirection: 'row',
            gap: moderateScale(20),
            padding: scale(10),
        },
        icon: {
            color: 'white',
            fontSize: moderateScale(25),
        }
})