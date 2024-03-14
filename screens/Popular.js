import { View, Text, Platform, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {Bars3CenterLeftIcon} from 'react-native-heroicons/outline'
const ios = Platform.OS == "ios";
const Popular = () => {
  return (
    <View className="flex-1 bg-neutral-800">
         {/* search bar */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar />
        <View  className="flex-row justify-between items-center mx-4" >
            <Bars3CenterLeftIcon />
       <Text className="text-white text-3xl font-bold"  >Popular Movies</Text>
       </View>
      </SafeAreaView>
    </View>
  );
};

export default Popular;
