import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import {
  FontAwesome6,
  FontAwesome,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useLocation } from "@react-navigation/native";
import {
  addMovieToFavorites,
  fetchsearchMovie,
  removeMovieFromFavorites,
} from "../Redux/slices";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const ios = Platform.OS == "ios";

const MovieDetail = ({ route }) => {
  const navigation = useNavigation();
  const { state } = route.params;
  console.log("state detail", state);
  return (
    <View style={styles.container}>
      {/* Container view for ImageBackground */}
      <View style={styles.imageContainer}>
        {/* Image Background */}
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${state.poster_path}`,
          }}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          {/* Faded gradient */}
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]} // Define your gradient colors here
            style={styles.gradientContainer}
          />

          {/* Movie title */}
          <Text style={styles.movieTitle}>{state.original_title}</Text>
        </ImageBackground>
      </View>
      <View style={{ height: "40%" }}>
        <Text style={styles.date}>
          Released: {state.release_date} &nbsp;&nbsp;Total vote
          {state.vote_count}
        </Text>
        <Text style={styles.description}>{state.overview}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageContainer: {
    height: "60%",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  movieTitle: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  date: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
  },
  description: {
    marginTop: 20,
    color: "white",
    textAlign: "left",
  },
});
export default MovieDetail;
