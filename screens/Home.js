import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
} from "../Redux/slices";
import Fetured from "../components/Fetured";
import Carousel from "react-native-anchor-carousel";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
const ios = Platform.OS == "ios";

const Home = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { nowPlaying, loading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchPopular());
    dispatch(fetchTopRated());
    dispatch(fetchUpcoming());
  }, [dispatch]);
  const carouselRef = useRef(null);
  const [state, setState] = useState(nowPlaying);
  const [backgroudnd, setBackground] = useState({
    image: state[0]?.poster_path || "",
    name: "name",
    detail: "",
    desc: "",
    rating: "",
  });
  useEffect(() => {
    setState(nowPlaying);
    if (nowPlaying.length > 0) {
      setBackground({
        image: state[0]?.poster_path || state[0]?.backdrop_path,
        name: state[0]?.original_title,
        detail: state[0]?.release_date,
        desc: state[0]?.overview,
        rating: state[0]?.vote_average,
      });
    }
  }, [nowPlaying]);

  // console.log(state[0]);
  //   console.log("check::", error, loading);

  const { width, height } = Dimensions.get("window");
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
          setBackground({
            image: item.poster_path || item.backdrop_path,
            name: item.original_title,
            detail: item.release_date,
            desc: item.overview,
            rating: item.vote_average,
          });
        }}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.carouselImage}
        />
        <Text style={styles.carouselText}>{item.original_title}</Text>
        <MaterialIcons
          name="library-add"
          size={30}
          color="white"
          style={styles.carouselIcon}
        />
      </TouchableOpacity>
    );
  };
  //   console.log(backgroudnd);

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView>
        <ScrollView
        
          className={ios ? "-mb-2" : "mb-3"}
        >
          <View style={styles.carouselContentContainer}>
            <View
              style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}
            >
              <ImageBackground
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${backgroudnd.image}`,
                }}
                style={styles.ImageBg}
                blurRadius={10}
              >
                {/* <View style={styles.SearchboxContainer}> */}
                <Header
                  Title={"Top Playing"}
                  // onPress={() => navigate("Favorites")}
                  onPressFavorites={() => navigate("Favorites")}
                  onPressSearch={() => navigate("Search")}
                />
                {/* </View> */}
                <Text
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginVertical: 10,
                  }}
                ></Text>
                <View style={styles.carouselContainerView}>
                  <Carousel
                    style={styles.carousel}
                    data={state}
                    renderItem={renderItem}
                    itemWidth={200}
                    containerWidth={width - 20}
                    separatorWidth={0}
                    ref={carouselRef}
                    inActiveOpacity={0.4}
                    //pagingEnable={false}
                    //minScrollDistance={20}
                  />
                </View>

                <View style={styles.movieInfoContainer}>
                  <View style={{ justifyContent: "center" }}>
                    <Text style={styles.movieName}>{backgroudnd.name}</Text>
                    <Text style={styles.movieStat}>
                      {backgroudnd.detail}&nbsp; &nbsp; &nbsp; Rating:
                      {backgroudnd.rating}
                    </Text>
                  </View>
                </View>
                <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                  <Text
                    style={{ color: "white", opacity: 0.8, lineHeight: 20 }}
                  >
                    {backgroudnd.desc}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  // CAROUSEL STYLES

  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  carouselText: {
    paddingLeft: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 720,
    paddingHorizontal: 14,
  },
  SearchboxContainer: {
    flexDirection: "row",
    marginVertical: 20,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
  },
  Searchbox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  SearchboxIcon: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
  playIconContainer: {
    backgroundColor: "#212121",
    padding: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 25,
    borderWidth: 4,
    borderColor: "rgba(2, 173, 148, 0.2)",
    marginBottom: 14,
  },
});

export default Home;
