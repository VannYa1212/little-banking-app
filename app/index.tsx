import { StyleSheet, Text, View, SafeAreaView, Pressable, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const index = () => {
  return (
    <View className='flex-1 bg-gray-900'>
      <StatusBar style='light' />
      <SafeAreaView className={` ${ Platform.OS === 'ios' ? 'pt-0':'pt-8' }`}>
        <Text className='text-white text-2xl'>Hello World</Text>
      </SafeAreaView>
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({})