import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Track} from '../types/Track'
import { moderateScale } from 'react-native-size-matters'

const ThumbnailSongItem = ({item, index, onPress,
    height=moderateScale(120),
    width=moderateScale(120)
}: {item: Track, index: number, onPress: () => void
    height?: number, width?: number
}) => {
  return (
    <Pressable
    onPress={onPress}
    style={styles.container}>
        <Image 
        resizeMode='contain'
        source={{uri: item.artwork}} style={{...styles.image, height, width}} />
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