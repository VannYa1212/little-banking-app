import { View, Text, Platform } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
const index = () => {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/main");
    }, 2000);
  }, []);
  return (
    <View className="flex-1 bg-gray-900">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg-home.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <SafeAreaView
        className={` ${ Platform.OS === "ios" ? "pt-0" : "pt-10" } relative flex-1`}
      >
        <View className="flex-1 flex-row flex items-center space-x-2 justify-center">
          <View className="flex flex-row space-x-2">
          <Animated.Text entering={FadeInLeft.delay(500).duration(500).springify()} className="text-white text-5xl font-bold">
            Little 
          </Animated.Text>
          <Animated.Text entering={FadeInRight.delay(500).duration(500).springify()} className="text-white text-5xl font-bold">
            Bank
          </Animated.Text>
          </View>
        </View>

      </SafeAreaView>
    </View>
  );
};

export default index;
