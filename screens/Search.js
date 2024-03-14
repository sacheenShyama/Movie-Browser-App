import { View, Text } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View className="flex-1 bg-neutral-800">
    {/* search bar */}
    <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
      <StatusBar style="light" />
      </SafeAreaView>
      </View>
  )
}

export default Search