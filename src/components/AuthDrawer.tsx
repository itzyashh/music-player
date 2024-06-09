import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { AuthScreenGradient, searchScreenGradient } from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
import Login from './Login';
import Register from './Register';

const AuthDrawer = () => {

    const [isLogin, setIsLogin] = React.useState(true)

  return (
    <BottomSheet
    backgroundStyle={styles.container}
    snapPoints={[
        isLogin ? '45%' : '60%',
    ]}

    style={styles.container}
    handleComponent={null}
    

>
    <LinearGradient
        colors={AuthScreenGradient}
        style={styles.gradient}>

    <BottomSheetView style={styles.contentContainer}>
   {
         isLogin ? <Login onSignUpPress={()=>setIsLogin(false)} /> : <Register onLoginPress={()=>setIsLogin(true)} />
   }

    </BottomSheetView>
    </LinearGradient>
</BottomSheet>
  )
}

export default AuthDrawer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#040515',
        flex: 1,
    },
    contentContainer: {

    },
    gradient: {
        flex: 1,
    },
 
})