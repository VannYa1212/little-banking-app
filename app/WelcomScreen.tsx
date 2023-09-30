import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

const WelcomScreen = () => {
  return (
    <View className='flex-1 '>
      <ImageBackground source={require('../assets/images/w-img.png')} style={{width: '100%', height: '100%'}} />
      <View className='flex-1 w-full flex flex-row items-center justify-center absolute top-8 py-8' >
        <Image source={require('../assets/images/logo.png')} style={{width: 213, height: 42}} />
      </View>
      <View className='flex-1 w-full flex flex-row items-center justify-center absolute bottom-8 py-8' >
        <View >
          <Text className='text-white text-2xl text-center font-bold'>Welcome to</Text>
          <Text className='text-white text-2xl text-center font-bold'>React Native</Text>
        </View>
      </View>
    </View>
  )
}

export default WelcomScreen