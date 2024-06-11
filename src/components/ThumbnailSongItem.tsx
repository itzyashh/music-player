import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Track} from '../types/Track'
import { moderateScale } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons';
const ThumbnailSongItem = ({item, index, onPress,
    type
}: {item: Track, index: number, onPress: () => void
    type: 'square' | 'default',
}) => {
  return (
    <Pressable
    onPress={onPress}
    style={styles.container}>
        <ImageBackground 
        resizeMode='contain'
        source={{uri: item.artwork}} style={[styles.image, type === 'square' ? {width: moderateScale(150), height: moderateScale(150)} : {}]}>

        <Ionicons name="heart" style={[styles.heart, type === 'square' ? {fontSize: moderateScale(25)} : {}]} />
        </ImageBackground>
        <Text
        numberOfLines={2}
        style={styles.text}>{item.title}</Text>
    </Pressable>
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