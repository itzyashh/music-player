import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Favourite = () => {
  const data = useSelector((state: any) => state.favorite.favorite)
  console.log('Data', data)
  return (
    <View style={styles.container}>
    
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