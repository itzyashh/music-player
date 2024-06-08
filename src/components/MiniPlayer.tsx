import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { Image, Pressable } from 'react-native';
import TrackPlayer, { Event, useActiveTrack, usePlaybackState, useProgress, useTrackPlayerEvents, } from 'react-native-track-player'
import { bottomTab } from '../constants/style';
import { moderateScale } from 'react-native-size-matters';
const MiniPlayer = () => {


    const playbackState = usePlaybackState()
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false)
    const progress = useProgress(200)
  
    const activeTrack = useActiveTrack()
  
    const TogglePlayback = async () => {
        if (isPlaying) {
          await TrackPlayer.pause()
        } else {
          await TrackPlayer.play().catch((error) => console.log('Error playing', error))
        }
      }
  
  console.log('Is playing', playbackState)
    useTrackPlayerEvents([Event.PlaybackState, Event.PlaybackActiveTrackChanged, Event.PlaybackError], (event) => {
      switch (event.type) {
        case Event.PlaybackActiveTrackChanged:
          console.log('Track changed', event)
          break
        case Event.PlaybackError:
          console.log('Error', event)
          break
        case Event.PlaybackState:
          setIsPlaying(event.state === 'playing')
          break
      }
  
    }
    )


    return (
        <View style={[styles.miniPlayer,{display: playbackState.state === 'none' ? 'none' : 'flex'}]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: activeTrack?.artwork }} style={styles.artwork} />
                <View style={{ marginLeft: moderateScale(20), gap: 3 }}>
                    <Text style={styles.title}>{activeTrack?.title}</Text>
                    <Text style={styles.artist}>{activeTrack?.artist}</Text>
                </View>
                </View>
                <Pressable
                    onPress={() => TogglePlayback()}>
                    <Foundation
                        name={isPlaying ? 'pause' : 'play'}
                        style={styles.playIcon}
                    />
                </Pressable>
            </View>
            <View style={[styles.progress,
                {width: `${(progress.position / progress.buffered) * 100}%`}
            ]} />
        </View>
    )
}

export default MiniPlayer

const styles = StyleSheet.create({
    miniPlayer: {
        backgroundColor: colors.panel,
        position: 'absolute',
        bottom: bottomTab.height,
        width: '100%',  
      },
      playIcon: {
        color: 'white',
        fontSize: moderateScale(34),
        marginRight: moderateScale(20)
      },
      progress: {
        height: 1,
        backgroundColor: 'white',
      },
      artist: {
            color: colors.text,
            fontSize: moderateScale(15),
            fontWeight: '500',
            opacity: 0.7
        },
        title: {
            color: colors.text,
            fontSize: moderateScale(16),
            fontWeight: '600'
        },artwork: {
            width: moderateScale(55),
            height: moderateScale(55),
            borderRadius: moderateScale(5),
            margin: moderateScale(5)
        }
    
})