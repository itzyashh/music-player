import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View,Keyboard, ActivityIndicator } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import useLogin from '../hooks/useLogin'
import { setUser } from '../redux/reducers/User'
import { useDispatch } from 'react-redux'

const Login = ({
    onSignUpPress,
    onLogin
}: {
    onSignUpPress: () => void,
    onLogin: () => void
}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {login, loading, error, user} = useLogin();

    const handleLogin = async () => {
      await login(email, password)
    }

    React.useEffect(() => {
        if(user) {
            dispatch(setUser(user))
            onLogin()
        }
    }, [user])
    




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
        onChangeText={setEmail}
        autoCapitalize='none'

    />
    <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#ffffff79"
        onChangeText={setPassword}
    />
    <Text
        style={styles.forgotPassword}
    >
        Forgot Password?

    </Text>

    <TouchableOpacity
        style={styles.button}
        onPress={()=>handleLogin()}
    >
  { loading ?
    <ActivityIndicator color="white" /> :
  <Text style={styles.buttonText}>{
            error ? 'Try Again' : 'Login'
        }</Text>}
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