import { StatusBar } from "expo-status-bar";
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
export default function ModalScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-neutral-900">
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
      <Image
        blurRadius={70}
        source={require("../assets/images/bg-home.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <SafeAreaView
        className={` ${
          Platform.OS === "ios" ? "pt-0" : "pt-10"
        } relative flex-1`}
      >
        <View className="h-12 flex-row items-center bg-transparent justify-center relative px-5">
          <Pressable
            onPress={() => router.push("/")}
            className="absolute left-2  p-2"
          >
            <Ionicons name="close-outline" size={28} color="white" />
          </Pressable>
          {/* <Text className="text-white text-2xl text-center font-semibold">
            Bank accounts
          </Text> */}
        </View>
        <View className="h-[60%] bg-transparent flex-col flex items-center justify-center">
          <View className="bg-transparent flex-col flex items-center justify-center">
            <Image
              className="rounded-full"
              source={require("../assets/images/profile.png")}
              style={{ width: 80, height: 80 }}
            />
            <View className="bg-transparent flex flex-col items-center justify-center mt-2">
              <Text className="text-white text-center text-lg font-semibold">
                Johnny Depp
              </Text>
              <Text className="text-white text-center text-[12px] mt-1 font-semibold">
                User Id: 625238
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View className="h-[70%] rounded-t-2xl bg-[#1C274C] flex flex-col space-y-2 px-5 pt-5">
        {[1,2,3,4,5].map((item,index) => (
        <Pressable key={index} onPress={()=>router.push("/Onboards")} className="bg-[#293765] py-2 px-3 rounded-xl flex flex-row  items-center justify-between">
          <View className="bg-transparent flex flex-row space-x-1 items-center">
            <Image
              source={require("../assets/images/Account.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text className="text-white text-lg  font-semibold">Accounts</Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="white" />
        </Pressable>
        ))}
      </View>
      {/* versions */}
      <View className="absolute bottom-0 bg-transparent w-full flex flex-col items-center justify-center space-y-2 pb-8">
        <Image source={require("../assets/images/logo.png")} className="h-[18] w-[91]" />
        <Text className="text-gray-400 text-[12px] font-semibold">
          Version 1.0.0
        </Text>
        {/* <Text className="text-white text-[12px] font-semibold">
          © 2021 Bank of America Corporation. All rights reserved.
        </Text> */}
      </View>
    </View>
  );
}
