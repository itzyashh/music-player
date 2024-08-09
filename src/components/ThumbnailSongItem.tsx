import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Track } from '../types/Track'
import { moderateScale } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
const ThumbnailSongItem = ({ item, index, onPress,
    type, onFavoritePress
}: {
    item: Track, index: number, onPress: () => void
    type: 'square' | 'default',
    onFavoritePress: () => void
}) => {

    const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

    const scale = useSharedValue(1)
    const zIndex = useSharedValue(0)
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            zIndex: zIndex.value
        }
    }
    ) 

    return (
        <AnimatedPressable
            onPress={onPress}
            onPressIn={() => scale.value = withTiming(1.3)}
            onPressOut={() => scale.value = withTiming(1)}
            style={[styles.container, rStyle]}>
            <ImageBackground
                resizeMode='contain'
                source={{ uri: item.artwork }} style={[styles.image, type === 'square' ? { width: moderateScale(150), height: moderateScale(150) } : {}]}>

                <Ionicons onPress={onFavoritePress} name="heart" style={[styles.heart,
                item.isFavorite ? { color: 'red' } : {},
                    , type === 'square' ? { fontSize: moderateScale(25) } : {}]} />
            </ImageBackground>
            <Text
                numberOfLines={2}
                style={styles.text}>{item.title}</Text>
        </AnimatedPressable>
    )
}

export default ThumbnailSongItem

const styles = StyleSheet.create({
    image: {
        width: moderateScale(120),
        height: moderateScale(120),
        borderRadius: moderateScale(5),
    },
    container: {
        marginHorizontal: moderateScale(6),
        marginVertical: moderateScale(5),
    },
    text: {
        color: 'white',
        fontSize: moderateScale(15),
        marginTop: moderateScale(5),
        fontWeight: 'bold',
        width: moderateScale(120)
    },
    heart: {
        alignSelf: 'flex-end',
        padding: moderateScale(5),
        color: 'white',
        fontSize: moderateScale(20),
        zIndex: 1
    }
})