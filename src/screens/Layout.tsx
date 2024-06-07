import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MiniPlayer from '../components/MiniPlayer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <View style={styles.container}>
            {children}
            <MiniPlayer />
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})