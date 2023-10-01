import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableNativeFeedback,
  Pressable,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
const WelcomScreen = () => {
  const router = useRouter();
  const [Privacy, setPrivacy] = React.useState(false);

  return (
    <View className="flex-1 ">
      <ImageBackground
        source={require("../assets/images/w-img.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <View className="flex-1 w-full flex flex-row items-center justify-center absolute top-8 py-8">
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 213, height: 42 }}
        />
      </View>
      <View className="flex-1 w-full flex flex-col items-center justify-center absolute bottom-8 py-3">
        <View className="flex mb-3 flex-col items-start w-full px-5">
          <Text className="text-white text-lg text-start ">
            Little bank is a digital bank that helps you save for what matters.
          </Text>
        </View>
        {/* divider with text account  */}
        <View className="flex flex-col items-center w-full px-5">
          <View className="flex flex-row items-center justify-center w-full">
            <View className="flex-1 h-px bg-white" />
            <Text className="text-white text-xl mx-4">Account</Text>
            <View className="flex-1 h-px bg-white" />
          </View>
        </View>
        {/* button login and register */}
        <View className="flex flex-col py-2 items-center w-full px-5">
          <View className="flex flex-row items-center mt-3 rounded-md overflow-hidden">
            <TouchableNativeFeedback
              onPress={() => router.push("/Login")}
              className="flex-row items-center justify-center bg-gray-300 mb-2  rounded-l-full "
            >
              <View className="flex-row items-center flex justify-center bg-white   w-full ">
                <Text className="text-black mx-4 py-3 text-center text-lg font-semibold">
                  Login
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View className="flex flex-row items-center mt-3 border border-white rounded-md overflow-hidden">
            <TouchableNativeFeedback
              onPress={() => router.push("/Register")}
              className="flex-row items-center justify-center  mb-2  rounded-l-full "
            >
              <View className="flex-row items-center flex justify-center    w-full ">
                <Text className=" mx-4 py-3 text-white text-center text-lg font-semibold">
                  Register
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Pressable
          onPress={() => setPrivacy(!Privacy)}
          className="flex flex-row px-5 mt-3"
        >
          <View
            className={`w-4 h-4 rounded-full ${
              Privacy ? "bg-green-600" : "bg-white"
            }`}
          />
          <Text className="text-white text-sm mx-2">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomScreen;
