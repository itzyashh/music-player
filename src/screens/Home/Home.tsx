import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../constants/colors'

import { header } from '../../constants/style'
import { LinearGradient } from 'expo-linear-gradient'
import ThumbnailSongItem from '../../components/ThumbnailSongItem'
import { Track, TrackAPI } from '../../types/Track'
import LocalHost from '../../api/LocalHost'
import TrackPlayer from 'react-native-track-player'
import { customisedGradients } from '../../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../../redux/reducers/Favorite'

const Home = () => {
  const dispatch = useDispatch()
   const user = useSelector((state: any) => state.user)
   console.log('User', user)
  const drawerstate = useSelector((state: any) => state.drawer)
  console.log('Drawer state', drawerstate)
  const favorite = useSelector((state: any) => state.favorite.favorite)
  const [gradientArr, setGradientArr] = React.useState<string[]>(["", "", "", ""])
  const [songsLoaded, setSongsLoaded] = React.useState<boolean>(false)
  const checkFavorite = () => {
    // check if list1 or list2 is in favorite
    // if it is, add favorite = true to the object in list 1 or list 2

    const list1Favorite = list1.map((track: Track) => {
      const check = favorite.find((fav: Track) => fav.id === track.id)
      return check ? {...track, isFavorite: true} : track
    })

    const list2Favorite = list2.map((track: Track) => {
      const check = favorite.find((fav: Track) => fav.id === track.id)
      return check ? {...track, isFavorite: true} : track
    })

    setList1(list1Favorite)
    setList2(list2Favorite)
  }

  useEffect(() => {
    checkFavorite()
  }, [favorite, songsLoaded])



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

  const addToFavorite = (item: Track) => {
    dispatch(addFavorite(item))
  }


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
          setSongsLoaded(true)
          break
        case 2:
          setList2(trackObject)
          setSongsLoaded(true)
          break
        default:
          setList1(trackObject)
          setSongsLoaded(true)
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
    renderItem={({ item, index }) => <ThumbnailSongItem item={item} index={index} onPress={()=>onTrackPress(item)} 
    onFavoritePress={()=>addToFavorite(item)}/> }
    keyExtractor={(item) => item.id.toString()}
    />
    <FlatList
    data={list2}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({ item, index }) => <ThumbnailSongItem item={item} index={index} onPress={()=>onTrackPress(item)} 
    onFavoritePress={()=>addToFavorite(item)}/> }
    keyExtractor={(item) => item.id.toString()}
    />
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