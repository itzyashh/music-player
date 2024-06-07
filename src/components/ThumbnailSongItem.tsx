import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Track} from '../types/Track'
import { moderateScale } from 'react-native-size-matters'

const ThumbnailSongItem = ({item, index, onPress}: {item: Track, index: number, onPress: () => void}) => {
  return (
    <Pressable
    onPress={onPress}
    style={styles.container}>
        <Image source={{uri: item.artwork}} style={styles.image} />
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
    }
})