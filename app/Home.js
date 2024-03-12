import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = (movie) => {
  console.log(movie);
  return (
    <View>
      <Text>Home</Text>

      {/* <Link href={"./Popular"}>
        {" "}
        <Text>popular</Text>{" "}
      </Link>
      <Link href={"./Liked"}>
        {" "}
        <Text>Liked</Text>{" "}
      </Link>
      <Link href={"./Toprated"}>
        {" "}
        <Text>Top Rated</Text>{" "}
      </Link>
      <Link href={"./Upcoming"}>
        {" "}
        <Text>Upcoming</Text>{" "}
      </Link> */}
    </View>
  );
};

export default Home;
