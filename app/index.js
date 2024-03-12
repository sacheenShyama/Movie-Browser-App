// index.js
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Home from "./Home";
import store from "../Redux/store"; // Corrected import

const index = () => {
  console.log("store:::", store);
  // const dispatch = useDispatch();
  // const { nowPlaying, popular, topRated, upcoming, loading, error } =
  //   useSelector((state) => state.movie);

  // const [state, setState] = useState({
  //   nowPlaying: nowPlaying,
  //   popular: popular,
  //   topRated: topRated,
  //   upcoming: upcoming,
  // });

  // useEffect(() => {
  //   dispatch(fetchNowPlaying());
  //   dispatch(fetchPopular());
  //   dispatch(fetchTopRated());
  //   dispatch(fetchUpcoming());
  // }, [dispatch]);
  // console.log(state);
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default index;
