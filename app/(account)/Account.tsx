import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  Pressable,
  ScrollView,
  Dimensions,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import * as Haptics from 'expo-haptics';
const Account = () => {
  const router = useRouter();
  const [showtransaction, setShowTransaction] = React.useState(false);

  const ShowTansactions = () => {
    setShowTransaction(true);
  };

  React.useEffect(() => {
    setTimeout(() => {
    Haptics.selectionAsync();
    } , 200);
  }, []);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  // Close the bottom sheet
  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <BottomSheetModalProvider>
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
              Bank accounts
            </Text>
          </View>
          <View className="p-5">
            <View className="p-3 flex-col flex space-y-2 relative bg-slate-900/50 border-8 border-slate-50/20 rounded-2xl ">
              <View className="flex flex-row items-center space-x-1 ">
                <Text className="text-3xl font-medium text-white">$</Text>
                <Text className="text-3xl font-medium text-white">
                  5,000.00
                </Text>
              </View>
              <Pressable className="absolute right-2 rounded-full">
                <Image
                  source={require("../../assets/images/more.png")}
                  style={{ width: 35, height: 35 }}
                />
              </Pressable>
              <View className="flex flex-col space-y-1 py-2">
                <Text className="text-white text-base">Account number</Text>
                <Text className="text-white text-2xl">123 456 789</Text>
              </View>
              <View className="absolute right-14 opacity-60 top-4">
                <Image
                  source={require("../../assets/images/bg-element.png")}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            </View>
          </View>
          <View
            className="px-5 w-full"
            style={{
              height: Dimensions.get("window").height / 2,
            }}
          >
            <View className="px-4 h-full bg-[#1C274C] py-2 rounded-xl w-full">
              <ScrollView
                className="py-2"
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                refreshControl={
                  <RefreshControl
                    refreshing={false}
                    onRefresh={() => {
                      console.log("refreshing");
                    }}
                    colors={["#fff"]}
                    progressBackgroundColor="#1C274C"
                  />
                }
              >
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/in.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#58CC5C]">
                      +{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex  py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/out.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#DB2B2B]">
                      -{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/in.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#58CC5C]">
                      +{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex  py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/out.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#DB2B2B]">
                      -{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex  py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/out.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#DB2B2B]">
                      -{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/in.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#58CC5C]">
                      +{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex  py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/out.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#DB2B2B]">
                      -{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex  py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/out.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#DB2B2B]">
                      -{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/in.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#58CC5C]">
                      +{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex  py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/out.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#DB2B2B]">
                      -{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="flex  py-2 flex-row justify-between items-center"
                >
                  <View className="flex flex-row space-x-1 items-center">
                    <Image
                      source={require("../../assets/images/out.png")}
                      className="w-8 h-8"
                    />
                    <Text className="text-white text-lg">Van Soriya</Text>
                  </View>
                  <View>
                    <Text className=" text-lg text-[#DB2B2B]">
                      -{"20 USD"}{" "}
                    </Text>
                  </View>
                </Pressable>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
        {/* Bottom sheet detail */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: "#323E68" }}
          handleComponent={() => (
            <View className="flex items-center ">
              <Pressable
                onPress={handleClosePress}
                className="p-2  absolute -top-12 right-3  rounded-full"
              >
                <AntDesign name="closecircleo" size={28} color="#fff" />
              </Pressable>
              <View
                style={{
                  width: 40,
                  height: 5,
                  marginBottom: 10,
                  marginTop: 10,
                  borderRadius: 5,
                  backgroundColor: "#fff",
                }}
              />
            </View>
          )}
        >
          <View className="flex-1 px-5">
            <View className="w-full mt-1 py-2 rounded-lg px-2 bg-slate-500 items-center flex flex-row justify-between">
              <View className="flex relative flex-row items-center space-x-2">
                <View>
                  <View className="h-12 rounded-full flex items-center justify-center w-12 bg-sky-400 ">
                    <Text className="text-white text-2xl">S</Text>
                  </View>
                  <View className="absolute bottom-0 -right-1 ">
                    <Image
                      source={require("../../assets/images/send.png")}
                      style={{ width: 24, height: 24 }}
                    />
                  </View>
                </View>
                <Text className="text-lg text-white">Van Soriya</Text>
              </View>
              <View>
                <Text className="text-lg text-white">-{"20 USD"} </Text>
              </View>
            </View>
            {/* line */}
            <View className="w-full border-b border-white h-2 mb-2" />
            <View className="flex flex-col space-y-1">
              <View className="flex flex-row justify-between py-1">
                <Text className="text-white text-base">Trax.ID:</Text>
                <Text className="text-white text-base">34567123478</Text>
              </View>
              <View className="flex flex-row justify-between py-1">
                <Text className="text-white text-base">From account:</Text>
                <Text className="text-white text-base">123456789</Text>
              </View>
              <View className="flex flex-row justify-between py-1">
                <Text className="text-white text-base">To account:</Text>
                <Text className="text-white text-base">567891234</Text>
              </View>
              <View className="flex flex-row justify-between py-1">
                <Text className="text-white text-base">Account name:</Text>
                <Text className="text-white text-base">Save money</Text>
              </View>
              <View className="flex flex-row justify-between py-1">
                <Text className="text-white text-base">Transaction date:</Text>
                <Text className="text-white text-base">10:23PM 23/09/2023</Text>
              </View>
            </View>
            <View className="flex space-x-8 flex-row items-center justify-center mt-7 ">
              <Pressable className="flex flex-col text-center items-center justify-center">
                <Image
                  source={require("../../assets/images/save.png")}
                  style={{ width: 34, height: 34 }}
                />
                <Text className="text-white text-center text-base">Save</Text>
              </Pressable>
              <Pressable className="flex flex-col text-center items-center justify-center">
                <Image
                  source={require("../../assets/images/try.png")}
                  style={{ width: 34, height: 34 }}
                />
                <Text className="text-white text-center text-base">Try</Text>
              </Pressable>
            </View>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
