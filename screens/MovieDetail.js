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

const genreMap = {
  28: " Action ",
  12: " Adventure ",
  16: " Animation ",
  35: " Comedy ",
  80: " Crime ",
  99: " Documentary ",
  18: " Drama ",
  10751: " Family ",
  14: " Fantasy ",
  36: " History ",
  27: " Horror ",
  10402: " Music ",
  9648: " Mystery ",
  10749: " Romance ",
  878: " Science Fiction ",
  10770: " TV Movie ",
  53: " Thriller ",
  10752: " War ",
  37: " Western ",
};
const MovieDetail = ({ route }) => {
  const navigation = useNavigation();
  const { state } = route.params;

  const genres = state.genre_ids
    .map((genreId) => genreMap[genreId])
    .filter(Boolean);

  // console.log("state detail", state);
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
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              // console.log("go back clicked");
            }}
            style={styles.backbutton}
          >
            <FontAwesome name="arrow-left" size={30} color="#E50914" />
          </TouchableOpacity>
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
          Released: {state.release_date} &nbsp;&nbsp;Total vote: &nbsp;
          {state.vote_count}
        </Text>
        <Text style={styles.genre}>{genres}</Text>
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
    height: "70%",
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
    color: "#E50914",
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
    color: "#666",
    textAlign: "left",
    fontSize: 16,
  },
  genre: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
  },
  backbutton: {
    position: "absolute",
    top: 30,
    left: 10,
    color: "#E50914",
    zIndex: 999,
  },
});
export default MovieDetail;
