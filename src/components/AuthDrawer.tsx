import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { AuthScreenGradient, searchScreenGradient } from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
import Login from './Login';
import Register from './Register';
import { useKeyboard } from '@react-native-community/hooks';

const AuthDrawer = (props) => {
    const bottomSheetRef = React.useRef<BottomSheet>(null)
    const [isLogin, setIsLogin] = React.useState(true)
    const keyboard = useKeyboard()

    if (props.isOpen) {
        bottomSheetRef.current?.expand()
    }
    



  return (
    <BottomSheet
    ref={bottomSheetRef}
    backgroundStyle={styles.container}
    snapPoints={[
        isLogin ? keyboard.keyboardShown ? '80%' : '45%' : keyboard.keyboardShown ? '90%' : '60%',
    ]}
    style={styles.container}
    handleComponent={null}
    enablePanDownToClose={true}
    enableOverDrag={true}
    onClose={()=>props.onClose(true)}
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