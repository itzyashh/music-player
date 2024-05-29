import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { colors } from '../constants/colors';

const CustomTabBar = (props: BottomTabBarProps) => {
    const routes = props.state.routes
    const isFocused = props.state.index
    const onPress = (index: number) => {
        props.navigation.navigate(routes[index].name)
    }

    return (
        <View style={styles.container}>
            {routes.map((route, index) => {
                return (
                    <Pressable
                        onPress={() => onPress(index)}
                        key={route.key} style={styles.tabContainer}
                    >
                        <Icon route={route} isFocused={isFocused === index} size={moderateScale(22)} />
                        <Text
                            style={[styles.text, { color: props.state.index === index ? 'white' : 'grey' }]}
                        >
                            {route.name}
                        </Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

export default CustomTabBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.panel,
        height: verticalScale(60)
    },
    text: {
        color: 'white',
        fontSize: moderateScale(12)
    },
    tabContainer: {
        alignItems: 'center'
    }
})

const Icon = ({ route, isFocused, size }: { route: any, isFocused: boolean, size?: number }) => {
    switch (route.name) {
        case 'Home':
            return <Ionicons name={isFocused ? 'home' : 'home-outline'} size={size} color={isFocused ? 'white' : 'grey'} />
        case 'Favourite':
            return <Ionicons name={isFocused ? 'heart' : 'heart-outline'} size={size} color={isFocused ? 'white' : 'grey'} />
        case 'Profile':
            return <Ionicons name={isFocused ? 'person-circle' : 'person-circle-outline'} size={size} color={isFocused ? 'white' : 'grey'} />
        default:
            return <Ionicons name={isFocused ? 'home' : 'home-outline'} size={size} color={isFocused ? 'white' : 'grey'} />
    }
}