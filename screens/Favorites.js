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
import { useNavigation } from "@react-navigation/native";
import {
  addMovieToFavorites,
  fetchsearchMovie,
  removeMovieFromFavorites,
} from "../Redux/slices";
import { useDispatch, useSelector } from "react-redux";

const ios = Platform.OS == "ios";
const Favorites = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { searchMovie, favorites } = useSelector((state) => state.movie);

  const isFavorite = (movie) => {
    return favorites.some((favMovie) => favMovie.id === movie.id);
  };

  const handleFavoritePress = (movie) => {
    if (isFavorite(movie)) {
      dispatch(removeMovieFromFavorites(movie.id));
    } else {
      dispatch(addMovieToFavorites(movie));
    }
  };
  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />

        <View className="flex-row  justify-between items-center mx-4 mt-7 ">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-bold">
            {/* <Text style={{ color: "#eab308" }}>P</Text>opular{" "} */}
            <Text>Favorites</Text>
          </Text>
          <TouchableOpacity>
            <FontAwesome name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={styles.flatlistStyle}
          data={favorites}
          numColumns={2}
          renderItem={({ item, index }) => {
            // console.log("item in search:::", item);
            return (
              <TouchableOpacity
                style={styles.listChild}
                onPress={() => navigate("MovieDetail", { state: item })}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={{ height: 250, width: 160, borderRadius: 20 }}
                />
                <FontAwesome
                  style={styles.movieIcon}
                  name="heart"
                  size={30}
                  onPress={() => handleFavoritePress(item)}
                  color={isFavorite(item) ? "#E50914" : "white"}
                />

                <View style={{ width: 150 }}>
                  <Text style={styles.movieName}>{item.original_title}</Text>
                  <Text style={styles.movieStat}>
                    {item.release_date}&nbsp; &nbsp;&nbsp;
                    {item.vote_average}/10
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // CAROUSEL STYLES
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlistStyle: {
    // backgroundColor: "red",
    // width: 340,
  },
  listChild: {
    padding: 10,
  },
  movieName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 6,
    textAlign: "center",
  },
  movieStat: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
    textAlign: "center",
  },
  movieIcon: {
    position: "absolute",
    left: 130,
    top: 30,
  },
  backbutton: {
    position: "absolute",
    top: 30,
    left: 10,
    color: "#E50914",
    zIndex: 999,
  },
});
export default Favorites;
