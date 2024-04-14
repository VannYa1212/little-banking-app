import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
const Qr = () => {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } , 200);
  }, []);
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
            className="absolute left-2 p-2"
          >
            <Feather name="chevron-left" size={28} color="white" />
          </Pressable>
          <Image
            source={require("../../assets/images/littile-logo.png")}
            className="w-[154px] h-[30px]"
          />
        </View>
        <View className="p-5 px-11">
          <View className="p-3 pt-2 pb-10 flex-col flex space-y-2 bg-slate-900/50 border-8 border-slate-50/20 rounded-2xl ">
            <View className="bg-[#E1232E] w-full rounded-lg flex flex-row items-center justify-center">
              <Image
                source={require("../../assets/images/khqr.png")}
                className="w-[96] h-[40]"
              />
            </View>
            <View className="py-4 flex flex-row space-x-1 justify-center items-center">
              <Text className="text-3xl text-white font-bold ">$</Text>
              <Text className="text-white text-2xl font-semibold">0.00</Text>
            </View>
            <View className="flex relative flex-row items-center justify-center overflow-hidden ">
              <Image
                source={require("../../assets/images/qrcode.png")}
                style={{ width: 200, height: 200 }}
                className="rounded-lg"
              />
              <Image
                source={require("../../assets/images/mid-qr.png")}
                style={{ width: 60, height: 60, position: "absolute" }}
              />
            </View>
          </View>
        </View>
        <Text className="text-white text-center text-[12px] font-semibold">
          Scan this QR code to pay
        </Text>
        <Text className="text-white mt-1 text-center text-[12px] font-semibold">
          or receive money from others
        </Text>
        <View className="px-5 w-full mt-3">
          <Pressable className="bg-slate-900/60 rounded-lg flex flex-row items-center py-3 justify-center">
            <Image
              source={require("../../assets/images/Dollar.png")}
              className="w-8 h-8"
            />
            <Text className="text-white ml-2 text-lg font-semibold">
              ADD AMOUNT
            </Text>
          </Pressable>
        </View>
        <View className="px-5 w-full mt-3">
          <Pressable className="border-2 border-gray-50/20 space-x-2 rounded-lg flex flex-row items-center py-3 justify-center">
            <Text className="text-white text-lg ">
              Account: 003 444 443 USD
            </Text>
            <Feather name="chevron-down" size={24} color="white" />
          </Pressable>
        </View>
        <View className="mt-5 flex flex-row items-center justify-center space-x-7">
          <View className="flex flex-col items-center justify-center space-y-1">
            <View className="p-2 bg-gray-50/20 rounded-full flex">
              <Image source={require("../../assets/images/save-qr.png")} className="w-8 h-8" />
            </View>
            <Text className="text-sm font-light text-center text-white ">Save</Text>
          </View>
          <View className="flex flex-col items-center justify-center space-y-1">
            <View className="p-2 bg-gray-50/20 rounded-full flex">
              <Image source={require("../../assets/images/screenshot.png")} className="w-8 h-8" />
            </View>
            <Text className="text-sm font-light text-center text-white ">Screenshot</Text>
          </View>
          <View className="flex flex-col items-center justify-center space-y-1">
            <View className="p-2 bg-gray-50/20 rounded-full flex">
              <Image source={require("../../assets/images/share-link.png")} className="w-8 h-8" />
            </View>
            <Text className="text-sm font-light text-center text-white ">Share</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Qr;

const styles = StyleSheet.create({});
