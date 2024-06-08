import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { colors } from '../constants/colors'

const SearchBar = ({
  onSearch,
}: {
  onSearch: () => void;
}) => {





  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search songs, artists, albums'
        placeholderTextColor={colors.panelText}
        style={styles.input}
        onChangeText={onSearch}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: verticalScale(35),
        backgroundColor: colors.panel,
        borderRadius: 100,
    },
    input: {
        flex: 1,
        color: colors.panelText,
        fontWeight: '500',
        fontSize: moderateScale(15),
        paddingLeft: moderateScale(20),
    }
})