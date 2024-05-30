import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/colors'
import { header } from '../../constants/style'
import { LinearGradient } from 'expo-linear-gradient'
import Tracks from '../../../assets/data/track.json'
import ThumbnailSongItem from '../../components/ThumbnailSongItem'
import { Track, TrackAPI } from '../../types/Track'
import LocalHost from '../../api/LocalHost'
import { useQuery } from '@tanstack/react-query'
import { Foundation } from '@expo/vector-icons';
import TrackPlayer, { Event, useActiveTrack, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player'
const Home = () => {

  const playbackState = usePlaybackState()
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)
  const progress = useProgress()
  console.log('Progress', progress)
  const activeTrack = useActiveTrack()
  console.log('Active track', activeTrack)


console.log('Is playing', isPlaying)
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

  const TogglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause()
    } else {
      await TrackPlayer.play().catch((error) => console.log('Error playing', error))
    }
  }


  const onTrackPress = async (item: Track) => {
    await TrackPlayer.reset()
    await TrackPlayer.add({
      id: item.id,
      url: item.url,
      title: item.title,
      artist: 'unknowm',
      artwork: item.artwork
    })
    await TrackPlayer.play()
  }

  const [list1, setList1] = React.useState<[]>([])
  const [list2, setList2] = React.useState<[]>([])
  // console.log('List1', list1)
  // console.log('List2', list2)

  const combineList = [...list2, ...list1]

  const getAllSongs = async (page:number|null) => {
    try {
      const response = await LocalHost.get('/songs/getAll', {
        params: {
          page,
        }
      })

      const trackObject = response.data.map((track: TrackAPI) => {
        // const combineArtist = track.artists.map((artist) => artist.name).join(', ')
        return {
          id: track.id.toString(),
          url: track.download.regular,
          title: track.name,
          artist: 'combineArtist',
          artwork: track.coverUrl
        }
      }
      )

      switch (page) {
        case 1:
          setList1(trackObject)
          break
        case 2:
          setList2(trackObject)
          break
        default:
          setList1(trackObject)
          break
      }

    } catch (error) {
      console.log('Error fetching songs', error)
    }
  }

  useEffect(() => {
    getAllSongs(null)
    getAllSongs(2)
  }
  , [])

  return (
    <View style={styles.root}>
    <LinearGradient
    colors={[colors.gradient2, colors.gradient1opacity0, colors.gradient1opacity1, colors.gradient1opacity2]}
    locations={[0.2, 0.3, 0.7, 1]} 
    style={{flex:1}}>
    <View style={styles.container}>
    <FlatList
    data={list1}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({ item, index }) => <ThumbnailSongItem item={item} index={index} onPress={()=>onTrackPress(item)} />}
    keyExtractor={(item) => item.id.toString()}
    />
    <FlatList
    data={list2}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({ item, index }) => <ThumbnailSongItem item={item} index={index} onPress={()=>onTrackPress(item)} />}
    keyExtractor={(item) => item.id.toString()}
    />
    
    </View>
    </LinearGradient>
    <View style={styles.miniPlayer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Image source={{uri: activeTrack?.artwork}} style={{
      width: 55,
      height: 55,
      borderRadius: 5,
      margin: 5
    }} />
    <View style={{marginLeft: 20,gap: 3}}>
    <Text style={{
      color: colors.text,
      fontSize: 16,
      fontWeight: '600'
    }}>{activeTrack?.title}</Text>
    <Text style={{
      color: colors.text,
      fontSize: 15,
      fontWeight: '500',
      opacity: 0.7
    }}>{activeTrack?.artist}</Text>
    </View>
    <Pressable
    onPress={() => TogglePlayback()}
    style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end',marginRight: 30}}>
    <Foundation 
    name={isPlaying ? 'pause' : 'play'}
     size={34} color="white" />
    </Pressable>
    </View>
    <View style={{
      height: 1,
      backgroundColor: 'white',
      width: progress.position / progress.buffered * 100 + '%'
    }} />
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    marginTop: header.height
  },
  text: {
    color: colors.text
  },
  miniPlayer: {


    backgroundColor: colors.panel,



  }
})