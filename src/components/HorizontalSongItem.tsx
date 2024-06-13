import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Track } from '../types/Track'
import { moderateScale } from 'react-native-size-matters'

const HorizontalSongItem = ({ item }: { item: Track }) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: item.artwork}} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
        </View>
    </View>
  )
}

export default HorizontalSongItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: moderateScale(10),
        alignItems: 'center',
    },
    image: {
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: moderateScale(10),
    },
    textContainer: {
        marginLeft: moderateScale(10),
    },
    title: {
        color: 'white',
        fontSize: moderateScale(16),
    },
    artist: {
        color: 'grey',
        fontSize: moderateScale(14),
    },
})