import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { header } from '../../constants/style'
import HorizontalSongItem from '../../components/HorizontalSongItem'
import { LinearGradient } from 'expo-linear-gradient'
import { customisedGradients } from '../../utils/helper'

const Favourite = () => {

  const [gradientArr, setGradientArr] = React.useState<string[]>(["", "", "", ""])
  React.useEffect(() => {
    setGradientArr(customisedGradients())
  }, [])
  const data = useSelector((state: any) => state.favorite.favorite)
  const reverseData = data.slice().reverse()
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientArr}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <FlatList
        data={reverseData}
        style={{ marginTop: header.height }}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <HorizontalSongItem item={item} />
        )}
      />
    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        },
        text:{
          color: 'white'
        }
})