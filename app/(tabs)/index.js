import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const index = () => {
  return (
    <View>
      <Link href={"/topRated/1"}>Got to home </Link>
      <Pressable
        onPress={() =>
          router.push({ pathname: "/topRated/[id]", params: { id: 2 } })
        }
      >
        <Text>Go to user 2</Text>
      </Pressable>
    </View>
  );
};

export default index;
