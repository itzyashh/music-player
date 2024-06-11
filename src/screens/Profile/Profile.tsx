import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { colors, searchScreenGradient } from '../../constants/colors'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { FontAwesome } from '@expo/vector-icons';
import AuthDrawer from '../../components/AuthDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/reducers/User'
import { setOpen } from '../../redux/reducers/Drawer'


const Profile = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
    const user = useSelector((state: any) => state.user.user)
    console.log('user222', user)
    console.log('is drawer open', isDrawerOpen)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setUser(null))
    }

  return (
    <Pressable
    disabled={!isDrawerOpen}
    onPress={()=>setIsDrawerOpen(false)}
    style={styles.container}>
        <LinearGradient
         colors={searchScreenGradient}
            style={StyleSheet.absoluteFill}
        />

        {
            user?.token ? <UserProfile user={user} onLogoutPress={handleLogout}/> : <NoUser setIsDrawerOpen={setIsDrawerOpen} />
        }
    



    </Pressable>
  )
}

const UserProfile = ({
    onLogoutPress,
    user
}: {
    onLogoutPress: () => void
    user: any
}) => {

    const {name, email} = user?.userDetails
    

    return(<>
        <View style={styles.textContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onLogoutPress}>
            <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
        </View>
        </>
    )
}

const NoUser = ({setIsDrawerOpen}: {setIsDrawerOpen: (value: boolean) => void}) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.noUserContainer}>
        <FontAwesome name="user-circle" size={moderateScale(200)} color="#7777" />
        <View style={styles.textContainer}>
        <Text style={styles.userName}>Guest</Text>
        <Text style={styles.email}>
            Please login to access all features
        </Text>
        <TouchableOpacity 
        onPress={()=>dispatch(setOpen(true))}
        style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
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
    },
    loginButton: {
        backgroundColor: colors.panel,
        padding: moderateScale(10),
        borderRadius: moderateScale(5),
        width: moderateScale(200),
        alignItems: 'center',
        marginTop: verticalScale(20),
    },
    loginButtonText: {
        color: colors.panelText,
        fontSize: moderateScale(16),
    },
})