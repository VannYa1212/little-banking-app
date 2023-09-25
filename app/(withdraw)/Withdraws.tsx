import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Withdraws = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-gray-900">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../../assets/images/bg-home.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <SafeAreaView
        className={` ${
          Platform.OS === "ios" ? "pt-0" : "pt-10"
        } relative flex-1`}
      >
        <View className="h-12 flex-row items-center justify-center relative px-5">
          <Pressable
            onPress={() => router.back()}
            className="absolute left-2  p-2"
          >
            <Feather name="chevron-left" size={28} color="white" />
          </Pressable>
          <Text className="text-white text-2xl text-center font-semibold">
            Withdraws
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        >
          <View className="rounded-t-2xl flex flex-col space-y-2 px-5 pt-5">
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Withdraws