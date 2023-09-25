import { View, Text, Image } from 'react-native'
import React from 'react'

const Background = () => {
  return (
    <View >
      <Image
        blurRadius={70}
        source={require("../assets/images/bg-home.png")}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  )
}

export default Background