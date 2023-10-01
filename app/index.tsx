import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Platform,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import { getItem } from "../libs/storage";
const index = () => {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");
  const [showwallet, setShowwallet] = React.useState(true);
  const ToggleEye = () => {
    setShowwallet(!showwallet);
  };

  useEffect(() => {
    getItem("token").then((res) => {
      if (!res) {
        router.push("/(auth)/Login");
      }
    });
  }
  , []);

  const feature = {
    roll1: [
      {
        name: "Accounts",
        icon: require("../assets/images/Accounts.png"),
        path: `/(account)/Account`,
      },
      {
        name: "Cards",
        icon: require("../assets/images/Cards.png"),
        path: `/(cards)/Cards`,
      },
      {
        name: "Transfers",
        icon: require("../assets/images/Transfers.png"),
        path: `/(transfer)/Transfers`,
      },
    ],
    roll2: [
      {
        name: "Withdraws",
        icon: require("../assets/images/Withdrawals.png"),
        path: `/Withdraws`,
      },
      {
        name: "Deposits",
        icon: require("../assets/images/Deposits.png"),
        path: `/Deposites`,
      },
      {
        name: "Services",
        icon: require("../assets/images/Services.png"),
        path: `/(auth)/PassCodeV1`,
      },
    ],
  };
  return (
    <View className="flex-1 bg-gray-900">
      <StatusBar style="light" />
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
        {/* Header */}
        <View className="flex flex-row justify-between items-center py-2 px-5">
          <Animated.View
            entering={FadeInLeft.delay(100).duration(400)}
            className="flex flex-row items-center space-x-2"
          >
            <Pressable onPress={()=>router.push('/modal')} className="w-12 flex items-center justify-center h-12 overflow-hidden rounded-full border-2 border-gray-50/5 border-double">
              <Image
                source={require("../assets/images/profile.png")}
                className="w-12 h-12"
              />
            </Pressable>
            <View className="p-1">
              <Image
                source={require("../assets/images/logo-bank.png")}
                className="w-[113] h-[22]"
              />
            </View>
          </Animated.View>
          <Animated.View
            entering={FadeInRight.delay(100).duration(400)}
            className="flex flex-row space-x-2"
          >
            <Pressable onPress={() => router.push("/Qr")}>
              <Image
                source={require("../assets/images/qr.png")}
                style={{ width: 35, height: 35 }}
              />
            </Pressable>
            <Pressable onPress={() => router.push("/Notifycations")}>
              <Image
                source={require("../assets/images/Notification.png")}
                style={{ width: 35, height: 35 }}
              />
            </Pressable>
          </Animated.View>
        </View>
        {/* Wallet show */}
        <View className="flex flex-col px-5 py-2 space-y-2">
          <View className="flex flex-row space-x-2 items-center">
            <Text className="text-white text-lg ">Your Wallet</Text>
            <Pressable onPress={ToggleEye}>
              {showwallet ? (
                <Image
                  source={require("../assets/images/on-Eye.png")}
                  className="w-8 h-8"
                />
              ) : (
                <Image
                  source={require("../assets/images/off-Eye.png")}
                  className="w-8 h-8"
                />
              )}
            </Pressable>
          </View>
          <Animated.View
            entering={FadeInLeft.delay(100)
              .duration(300)
              .springify()
              .damping(8)}
            className="flex space-x-2 flex-row"
          >
            <Text className="text-white text-4xl font-normal">$</Text>
            {showwallet ? (
              <Text className="text-white text-4xl font-bold">5.00</Text>
            ) : (
              <View className="h-full w-32 bg-gray-50/50  rounded-xl"></View>
            )}
          </Animated.View>
        </View>
        {/* Service Feature */}
        <View className="p-5 ">
          <View className="p-3 flex-col flex space-y-2 bg-slate-900/50 border-8 border-slate-50/20 rounded-2xl ">
            <View className="w-full flex flex-row space-x-2 justify-between">
              {feature.roll1.map((item, index) => (
                <TouchableHighlight
                  onPress={() => router.push(item.path as `http${string}`)}
                  key={index}
                  underlayColor="#111"
                  className="flex bg-black w-[calc(100%/3.2)] p-2 rounded-lg  flex-col items-center"
                >
                  <View className="flex flex-col items-center justify-center">
                    <Image
                      source={item.icon}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text className="text-white text-sm">{item.name}</Text>
                  </View>
                </TouchableHighlight>
              ))}
            </View>
            <View className="w-full flex flex-row space-x-2 justify-between">
              {feature.roll2.map((item, index) => (
                <TouchableHighlight
                  onPress={() => router.push(item.path as `http${string}`)}
                  key={index}
                  underlayColor="#111"
                  className="flex bg-black w-[calc(100%/3.2)] p-2 rounded-lg  flex-col items-center"
                >
                  <View className="flex flex-col items-center justify-center">
                    <Image
                      source={item.icon}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text className="text-white text-sm">{item.name}</Text>
                  </View>
                </TouchableHighlight>
              ))}
            </View>
          </View>
        </View>
        {/* Service scroll */}
        <View className="px-5 w-full">
          <View className=" w-full flex-col flex space-y-2 bg-slate-900/50 border-8 border-slate-50/20 rounded-2xl ">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="p-3"
            >
              <View className="w-full flex flex-row space-x-2 justify-between pr-6">
                {feature.roll1.map((item, index) => (
                  <Pressable
                    key={index}
                    className="flex bg-black pr-2  p-2 rounded-lg  flex-row items-center"
                  >
                    <Image
                      source={item.icon}
                      style={{ width: 38, height: 38 }}
                    />
                    <Text className="text-white text-sm">{item.name}</Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
        {/* Bottom bar */}
        {/* <View 
          className="absolute bottom-0 w-full flex flex-row justify-around items-center bg-gray-900"
          style={{ 
            height: Platform.OS === "ios" ? 90 : 60,
            paddingBottom: Platform.OS === "ios" ? 30 : 0,
           }}
        >
          <Pressable className="flex flex-col items-center">
            <Text className="text-white text-sm">Home</Text>
            <View className="w-5 h-1 bg-white rounded-full"></View>
          </Pressable>
          <Pressable className="flex flex-col items-center">
            <Text className="text-white text-sm">Search</Text>
            <View className="w-5 h-1 bg-transparent rounded-full"></View>
          </Pressable>
          <Pressable className="flex flex-col items-center">
            <Text className="text-white text-sm">Your Library</Text>
            <View className="w-5 h-1 bg-transparent rounded-full"></View>
          </Pressable>

        </View> */}
      </SafeAreaView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
