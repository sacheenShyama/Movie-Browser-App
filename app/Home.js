import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
} from "../Redux/slices";
const Home = () => {
  const dispatch = useDispatch();
  const { nowPlaying, popular, topRated, upcoming, loading, error } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchPopular());
    dispatch(fetchTopRated());
    dispatch(fetchUpcoming());
  }, [dispatch]);

  useEffect(() => {
    setState({
      nowPlaying,
      popular,
      topRated,
      upcoming,
    });
  }, [nowPlaying, popular, topRated, upcoming]);

  const [state, setState] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  console.log(state);
  console.log("check::", error, loading);
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
