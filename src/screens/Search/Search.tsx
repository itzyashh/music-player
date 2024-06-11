import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { colors, searchScreenGradient } from '../../constants/colors'
import SearchBar from '../../components/SearchBar'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import LocalHost from '../../api/LocalHost'
import ThumbnailSongItem from '../../components/ThumbnailSongItem'
import { TrackAPI } from '../../types/Track'
import TrackPlayer, { Track } from 'react-native-track-player'
import { AntDesign } from '@expo/vector-icons';
const Search = ({navigation}) => {
  const [search, setSearch] = React.useState('')

  const [songs, setSongs] = React.useState([])
  console.log('songs', songs)
  const handleSearch = async () => {
    try {
      const response = await LocalHost.get(`/songs/search?q=${search}`)
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
      setSongs(trackObject)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handlePress = async (item: Track) => {
    await TrackPlayer.reset()
   await TrackPlayer.add({
      id: item.id,
      url: item.url,
      title: item.title,
      artist: item.artist,
      artwork: item.artwork
    })
   await TrackPlayer.play()
  }


  useEffect(() => {
    if (search.length > 2) {
      handleSearch()
    }    if (search.length === 0) {
      setSongs([])
    }

  }, [search])

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={searchScreenGradient}
        style={styles.linearGradient}
        locations={[ 0.3, 0.7, 1]} 
      >
        <View style={styles.searchContainer}>
        {/* @ts-ignore */}
        <AntDesign style={styles.icon} name="left"  onPress={() => navigation.goBack()} />
        <SearchBar onSearch={setSearch} />
        </View>

        <FlatList
          data={songs}
          style={styles.list}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          renderItem={({ item, index }) => <ThumbnailSongItem item={item} index={index} type='square' onPress={() => handlePress(item)}
          />}

        />

      </LinearGradient>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  linearGradient: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(60),
    alignItems: 'center',
    marginLeft: moderateScale(15),
    marginRight: moderateScale(60),
    gap: moderateScale(10)
  },
  icon: {
    color: colors.panelText,
    fontSize: moderateScale(20)
  },

  list: {
    flex: 1,
    marginTop: verticalScale(20),
    marginHorizontal: moderateScale(20)
  },

})