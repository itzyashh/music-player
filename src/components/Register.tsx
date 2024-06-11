import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import useRegister from '../hooks/useRegister'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/reducers/User'


const Register = ({
    onLoginPress,
    onRegister
}: {
    onLoginPress: () => void,
    onRegister: () => void
}) => {
    const dispatch = useDispatch()
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [passwordMatch, setPasswordMatch] = React.useState(true)
    const [fullName, setFullName] = React.useState('')
    const [email, setEmail] = React.useState('')

    const {register, loading, error, user} = useRegister();

    const handleRegister = async () => {
        await register(email, password, fullName)
    }

    React.useEffect(() => {
        if(user) {
            dispatch(setUser(user))
            onRegister()
        }
    }, [user])


    React.useEffect(() => {
        if (password !== confirmPassword) {
            setPasswordMatch(false)
        } else {
            setPasswordMatch(true)
        }
    }, [password, confirmPassword])

  return (
    <View>
         <Text style={styles.header}>Register</Text>
    <TextInput
        placeholder="Full Name"
        style={styles.input}
        placeholderTextColor="#ffffff79"
        onChangeText={setFullName}
        autoCapitalize='words'
        autoCorrect={false}
        autoComplete='name'

    />
    <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#ffffff79"
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        autoComplete='email'
    />
    <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#ffffff79"
        onChangeText={setPassword}
    />
    <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#ffffff79"
        onChangeText={setConfirmPassword}
    />
  {!passwordMatch &&  <Text style={styles.matchError}>Password does not match</Text>}

    <TouchableOpacity
        disabled={!passwordMatch}
        style={styles.button}
        onPress={()=>handleRegister()}
    >{loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>{
        error ? 'Try Again' : 'Register'
    }</Text>}
    </TouchableOpacity>
    <Text
        style={[styles.forgotPassword,{marginTop:moderateScale(15),textAlign:'center'}]}
    >
        Already have an account? <Text
        onPress={onLoginPress}
        style={styles.signup}>Login</Text>

    </Text>
    </View>
  )
}

export default Register

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
    matchError: {
        color: 'red',
        textAlign: 'center',
        marginTop: moderateScale(-10),
        alignSelf: 'flex-start',
        marginLeft: moderateScale(32),
    }
})