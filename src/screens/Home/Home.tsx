import { Button, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
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
import TrackPlayer from 'react-native-track-player'
import { customisedGradients, randomGradientGenerator } from '../../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/reducers/User'

const Home = () => {
  const dispatch = useDispatch()
   const user = useSelector((state: any) => state.user)
   console.log('User', user)


  const [gradientArr, setGradientArr] = React.useState<string[]>(["", "", "", ""])

  const onTrackPress = async (item: Track) => {
    await TrackPlayer.reset()
    await TrackPlayer.add({
      id: item.id,
      url: item.url,
      title: item.title,
      artist: item.artist,
      artwork: item.artwork
    })
    await TrackPlayer.play()

    const queue = combineList.map((track: Track) => ({
      id: track.id,
      url: track.url,
      title: track.title,
      artist: track.artist,
      artwork: track.artwork
    }))

    const filterQueue = queue.filter((track) => track.id !== item.id)

    await TrackPlayer.add(filterQueue)

  }

  const getQueue = async () => {
    const queue = await TrackPlayer.getQueue()
    console.log('Queue', queue.map((track) => track.title))
  }

  useEffect(() => {
    getQueue()
  }
  , [onTrackPress])

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
        const combineArtist = track.artists.map((artist) => artist.name).join(', ')
        return {
          id: track.id.toString(),
          url: track.download.regular,
          title: track.name,
          artist: combineArtist,
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
    getExclusiveGradient()
  }
  , [])



  const getExclusiveGradient = () => {
    const gradient = customisedGradients()
    setGradientArr(gradient)
  }

  console.log('Gradient', gradientArr)


  return (
    <View style={styles.root}>
    <LinearGradient
    // colors={[colors.gradient2, colors.gradient1opacity0, colors.gradient1opacity1, colors.gradient1opacity2]}
    colors={gradientArr}
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
    <Button   title="Test" onPress={()=>{
      dispatch(setUser({name: 'John'}) )
    }} />
    </View>
    </LinearGradient>
  
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

})