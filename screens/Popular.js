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
import {
  FontAwesome6,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { Link } from "react-router-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopular } from "../Redux/slices";
const ios = Platform.OS == "ios";
const Popular = () => {
  const dispatch = useDispatch();
  const { popular, loading, error } = useSelector((state) => state.movie);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const [state, setState] = useState(popular);
  useEffect(() => {
    setState(popular);
  }, [popular]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setState([...state, ...popular]);
  };

  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 mt-7">
          <FontAwesome6 name="bars-staggered" size={30} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={{ color: "#eab308" }}>P</Text>opular{" "}
            <Text style={{ color: "#eab308" }}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <Link>
              <FontAwesome name="search" size={22} color="#666" />{" "}
            </Link>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={styles.flatlistStyle}
          data={state}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.listChild}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={{ height: 250, width: 160, borderRadius: 20 }}
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
});
export default Popular;
