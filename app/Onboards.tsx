import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
const { width, height } = Dimensions.get("window");
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

const Onboards = () => {
  const router = useRouter();

  // custom skip button and next button
  const Skip = ({ ...props }) => (
    <Text
      style={{ color: "#fff", fontSize: 16, marginHorizontal: 10 }}
      {...props}
    >
      Skip
    </Text>
  );
  const Next = ({ ...props }) => (
    <View className="flex-row items-center justify-center bg-white mb-2  rounded-l-full ">
      <Text
        className="text-black mx-4 py-2 text-center text-lg font-semibold"
        {...props}
      >
        Next
      </Text>
    </View>
  );
  const Done = ({ ...props }) => (
    <Pressable
      onPress={() => router.push("/WelcomScreen")}
      className="flex-row items-center justify-center bg-white mb-2  rounded-l-full "
    >
      <Text
        className="text-black mx-4 py-2 text-center text-lg font-semibold"
        {...props}
      >
        Done
      </Text>
    </Pressable>
  );
  interface DotsProps {
    selected: boolean;
  }

  const Dots = ({ selected }: DotsProps) => {
    let backgroundColor;
    backgroundColor = selected ? "#fff" : "#888";
    return (
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 3,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };

  return (
    <View className="flex-1">
      {/* Header */}
      <View className=" top-8 z-10 bg-slate-50 my-8 flex w-full   flex-row items-center bg-transparent justify-center absolute px-5">
        <Image
          source={require("../assets/images/logo.png")}
          className="w-[213] h-[42]"
        />
        <Pressable
          onPress={() => router.push("/WelcomScreen")}
          className="absolute right-5"
        >
          <Text className="text-white text-lg font-medium">Skip</Text>
        </Pressable>
      </View>
      <LottieView
        source={require("../assets/images/animates/bg-animate.json")}
        autoPlay
        loop
        style={{
          width: width,
          height: height,

          position: "absolute",
        }}
      />
      <View className="w-full h-full bg-blue-950/50 absolute  ">
        <BlurView
          intensity={100}
          tint="dark"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View className="w-full h-full">
        <Onboarding
          bottomBarHighlight={false}
          onSkip={() => router.push("/WelcomScreen")}
          // custom skip button and next button
          onDone={() => router.push("/WelcomScreen")}
          showSkip={false}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          DotComponent={Dots}
          showPagination={true}
          bottomBarHeight={80}
          pages={[
            {
              backgroundColor: "#2020200",
              image: (
                <LottieView
                  source={require("../assets/images/animates/onboard-3w.json")}
                  autoPlay
                  loop
                  style={styles.animated}
                />
              ),
              title: "Welcome to Our Banking App",
              subtitle:
                "Get started with our banking app and experience a new way to manage your finances. Whether it's checking your account balance, making transactions, or saving for the future, we've got you covered",
            },
            {
              backgroundColor: "#2020200",
              image: (
                <LottieView
                  source={require("../assets/images/animates/onboard-2.json")}
                  autoPlay
                  loop
                  style={styles.animated}
                />
              ),
              title: "Manage Your Accounts Easily",
              subtitle:
                "With our app, you can easily view your account details, track your transactions, and transfer funds between accounts. Stay in control of your finances, all from the convenience of your mobile device.",
            },
            {
              backgroundColor: "#2020200",
              image: (
                <LottieView
                  source={require("../assets/images/animates/Security.json")}
                  autoPlay
                  loop
                  style={styles.animated}
                />
              ),
              title: "Your Security, Our Priority",
              subtitle:
                "We take your security seriously. Learn about our robust security measures that protect your personal and financial information. If you ever need assistance, our dedicated support team is just a message away.",
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Onboards;

const styles = StyleSheet.create({
  animated: {
    width: width,
    height: width,
  },
});
