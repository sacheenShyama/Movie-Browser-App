import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import {
  FontAwesome6,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopular,
  addMovieToFavorites,
  removeMovieFromFavorites,
} from "../Redux/slices";
import Header from "../components/Header";
const ios = Platform.OS == "ios";

const Popular = () => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const { popular, loading, error } = useSelector((state) => state.movie);
  const [page, setPage] = useState(1);
  // const [favorites, setFavorites] = useState({});
  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const [state, setState] = useState(popular);
  useEffect(() => {
    setState(popular);
  }, [popular]);

  const favorites = useSelector((state) => state.movie.favorites);

  const isFavorite = (movie) => {
    return favorites.some((favMovie) => favMovie.id === movie.id);
  };

  

  const handleLoadMore = () => {
    setPage(page + 1);
    setState([...state, ...popular]);
  };

  const handleFavoritePress = (movie) => {
    if (isFavorite(movie)) {
      dispatch(removeMovieFromFavorites(movie.id));
    } else {
      dispatch(addMovieToFavorites(movie));
    }
    // console.log("favorites", favorites);
  };

  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <Header
          Title={"Popular"}
          onPressFavorites={() => navigate("Favorites")}
          onPressSearch={() => navigate("Search")}
        />
      </SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={styles.flatlistStyle}
          data={state}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.listChild}   onPress={() => navigate("MovieDetail", { state: item })}>
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
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
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
});
export default Popular;
