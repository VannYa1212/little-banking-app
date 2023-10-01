import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
const Register = () => {
  const router = useRouter();
  return (
    <View className="flex-1 flex items-center justify-center  ">
      <ImageBackground
        blurRadius={6}
        source={require("../../assets/images/w-img.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <View className="flex-1 w-full flex flex-row items-center justify-center absolute top-8 py-8">
        <Pressable
          onPress={() => router.back()}
          className="absolute left-2 p-2"
        >
          <Feather name="chevron-left" size={28} color="white" />
        </Pressable>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 190, height: 37 }}
        />
      </View>

      <View className="flex-1 absolute px-5 items-center w-full justify-center z-10 mb-4   ">
        <View className="bg-white rounded-full absolute -top-14 p-2">
          <Image
            source={require("../../assets/images/ShieldUser.png")}
            className="w-16 h-16"
          />
        </View>
        <View className="flex flex-col px-4 bg-white/10 rounded-lg py-4  items-center justify-center w-full">
          <Text className="text-white text-2xl font-semibold mt-4">Register</Text>
          <View className="w-full">
            <Text className="text-white text-lg font-normal mt-4">Email</Text>
            <View className="py-1 border bg-white/20 border-gray-400 rounded-lg">
              <TextInput
                placeholder="Email"
                className=" text-white rounded-lg px-4 py-2 w-full"
              />
            </View>
          </View>
          <View className="w-full">
            <Text className="text-white text-lg font-normal mt-4">
              Password
            </Text>
            <View className="py-1 border bg-white/20 border-gray-400 rounded-lg">
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                className=" rounded-lg px-4 py-2 w-full text-white"
              />
            </View>
          </View>
          <View className="w-full mt-8">
            <Pressable 
            onPress={() => router.push("/Login")}
            className="flex-row items-center justify-center bg-white mb-2  rounded-lg ">
              <Text className="text-black mx-4 py-2 text-center text-lg font-semibold">
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className="flex-1 w-full flex flex-col items-center justify-center absolute bottom-8 py-3">
        <Pressable onPress={() => router.push("/Login")}>
          <Text className="text-white text-base font-normal">
            Already have an account?{" "}
            <Text className="text-white text-base font-semibold">Login</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Register

const styles = StyleSheet.create({})