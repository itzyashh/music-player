import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { AuthScreenGradient, searchScreenGradient } from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
import Login from './Login';
import Register from './Register';
import { useKeyboard } from '@react-native-community/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/reducers/Drawer';

const AuthDrawer = () => {
    const bottomSheetRef = React.useRef<BottomSheet>(null)
    const [isLogin, setIsLogin] = React.useState(true)
    const dispatch = useDispatch()
    const keyboard = useKeyboard()
    
    // React.useEffect(() => {
    //     if (isOpen) {
    //         bottomSheetRef.current?.expand()
    //     } else {
    //         bottomSheetRef.current?.collapse()
    //     }
    // }, [isOpen])
    
    const drawerGlobalState = useSelector((state: any) => state.drawer)
    console.log('drawer global state', drawerGlobalState)

    React.useEffect(() => {
        if (drawerGlobalState.isOpen === true) {
            bottomSheetRef.current?.expand()
        }else {
            bottomSheetRef.current?.collapse()
        }
    }
    , [drawerGlobalState.isOpen])

    if(!drawerGlobalState.isOpen) {
        return null
    }

    const onClose = () => {
        bottomSheetRef.current?.close()
        dispatch(setOpen(false))
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
    onClose={onClose}
>
    <LinearGradient
        colors={AuthScreenGradient}
        style={styles.gradient}>

    <BottomSheetView style={styles.contentContainer}>
   {
         isLogin ? <Login onSignUpPress={()=>setIsLogin(false)} onLogin={onClose} />
         : <Register onLoginPress={()=>setIsLogin(true)} onRegister={onClose} />
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