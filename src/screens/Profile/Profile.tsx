import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { colors, searchScreenGradient } from '../../constants/colors'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { FontAwesome } from '@expo/vector-icons';
import AuthDrawer from '../../components/AuthDrawer'

const Profile = () => {
  return (
    <View style={styles.container}>
        <LinearGradient
         colors={searchScreenGradient}
            style={StyleSheet.absoluteFill}
        />
        {/* <UserProfile /> */}
        <NoUser />
       
    <AuthDrawer />
    </View>
  )
}

const UserProfile = () => {
    return(<>
        <View style={styles.textContainer}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.email}>johndoe@gmail.com</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
        </View>
        </>
    )
}

const NoUser = () => {
    return (
        <View style={styles.noUserContainer}>
        <FontAwesome name="user-circle" size={moderateScale(200)} color="#7777" />
        <View style={styles.textContainer}>
        <Text style={styles.userName}>Guest</Text>
        <Text style={styles.email}>
            Please login to access all features
        </Text>
        </View>
        </View>
    )
}


export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    textContainer: {
        flex: 1,
        marginTop: verticalScale(60),
        alignItems: 'center',
    },
    userName: {
        color: 'white',
        fontSize: moderateScale(40),
    },
    email: {
        color: 'white',
        fontSize: moderateScale(16),
        opacity: 0.7,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.panel,
        padding: moderateScale(10),
        borderRadius: moderateScale(5),
        width: moderateScale(200),
        alignItems: 'center',
    },
    buttonText: {
        color: colors.panelText,
        fontSize: moderateScale(16),
    },
    noUserContainer: {
        flex: 1,
        marginTop: verticalScale(60),
        alignItems: 'center',
    }
})