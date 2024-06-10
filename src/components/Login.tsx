import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View,Keyboard } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Login = ({
    onSignUpPress
}: {
    onSignUpPress: () => void
}) => {
  return (
    <Pressable
    onPress={Keyboard.dismiss}
    >
         <Text style={styles.header}>LOGIN</Text>
    <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#ffffff79"

    />
    <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#ffffff79"
    />
    <Text
        style={styles.forgotPassword}
    >
        Forgot Password?

    </Text>

    <TouchableOpacity
        style={styles.button}
    >
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <Text
        style={[styles.forgotPassword,{marginTop:moderateScale(15),textAlign:'center'}]}
    >
        Don't have an account? <Text 
        onPress={onSignUpPress}
        style={styles.signup}>Sign Up</Text> 

    </Text>
    </Pressable>
  )
}

export default Login

const styles = StyleSheet.create({
    header: {
        fontSize: moderateScale(25),
        color: 'white',
        // ittalic: 'italic',
        fontWeight: '600',
        marginLeft: moderateScale(20),
        marginVertical: moderateScale(20),
        letterSpacing: 1,
        opacity: 0.8,

    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginHorizontal: moderateScale(20),
        marginVertical: moderateScale(10),
        padding: moderateScale(10),
        borderRadius: moderateScale(15),
        color: 'white',
        fontSize: moderateScale(16)
    },
    forgotPassword: {
        color: 'white',
        marginLeft: moderateScale(20),
        textAlign: 'right',
        marginRight: moderateScale(20),
    },
    button: {
        backgroundColor: '#3F51B5',
        padding: moderateScale(10),
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(20),
        borderRadius: moderateScale(15),
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: moderateScale(16),
    },
    signup: {
        color: '#3F51B5',
        textDecorationLine: 'underline',
    },

})