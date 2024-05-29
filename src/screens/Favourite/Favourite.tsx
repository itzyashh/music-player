import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourite</Text>
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