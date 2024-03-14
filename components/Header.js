import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  FontAwesome6,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Header = ({ Title, onPressSearch, onPressFavorites }) => {
  const handlePress = (icon) => {
    if (icon === "search") {
      onPressSearch();
    } else if (icon === "favorites") {
      onPressFavorites();
    }
  };

  return (
    <View className="flex-row  justify-between items-center mx-4 mt-7 ">
      <TouchableOpacity onPress={() => handlePress("favorites")}>
        <FontAwesome name="heart" size={24} color="#E50914" />
      </TouchableOpacity>
      <Text className="text-white text-3xl font-bold">
        {/* <Text style={{ color: "#eab308" }}>P</Text>opular{" "} */}
        <Text>{Title}</Text>
      </Text>
      <TouchableOpacity onPress={() => handlePress("search")}>
        <FontAwesome name="search" size={22} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
