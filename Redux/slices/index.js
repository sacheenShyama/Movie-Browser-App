import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const MOVIE_KEY = "81858c32cf6c7e2916250b193557952a";
const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
  favorites: [],
  searchMovie: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchNowPlayingStart(state) {
      state.loading = true;
    },
    fetchNowPlayingSuccess(state, action) {
      state.nowPlaying = action.payload;
      state.loading = false;
    },
    fetchNowPlayingFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchPopularStart(state) {
      state.loading = true;
    },
    fetchPopularSuccess(state, action) {
      state.popular = action.payload;
      state.loading = false;
    },
    fetchPopularFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchTopRatedStart(state) {
      state.loading = true;
    },
    fetchTopRatedSuccess(state, action) {
      state.topRated = action.payload;
      state.loading = false;
    },
    fetchTopRatedFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchUpcomingStart(state) {
      state.loading = true;
    },
    fetchUpcomingSuccess(state, action) {
      state.upcoming = action.payload;
      state.loading = false;
    },
    fetchUpcomingFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addFavorite(state, action) {
      const { movie } = action.payload;
      state.favorites.push(movie);
    },
    removeFavorite(state, action) {
      const { id } = action.payload;
      state.favorites = state.favorites.filter((movie) => movie.id !== id);
    },
    fetchsearchMovieStart(state) {
      state.loading = true;
    },
    fetchsearchMovieSuccess(state, action) {
      state.searchMovie = action.payload;
      state.loading = false;
    },
    fetchsearchMovieFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchNowPlayingFailure,
  fetchNowPlayingStart,
  fetchNowPlayingSuccess,
  fetchPopularFailure,
  fetchPopularStart,
  fetchPopularSuccess,
  fetchTopRatedFailure,
  fetchTopRatedStart,
  fetchTopRatedSuccess,
  fetchUpcomingFailure,
  fetchUpcomingStart,
  fetchUpcomingSuccess,
  addFavorite,
  removeFavorite,
  fetchsearchMovieStart,
  fetchsearchMovieSuccess,
  fetchsearchMovieFailure,
} = movieSlice.actions;

export const fetchNowPlaying = () => async (dispatch) => {
  try {
    dispatch(fetchNowPlayingStart());
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_KEY}&language=en-US`
    );
    dispatch(fetchNowPlayingSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchNowPlayingFailure(error.message));
  }
};

export const fetchPopular = () => async (dispatch) => {
  try {
    dispatch(fetchPopularStart());
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_KEY}&language=en-US`
    );

    dispatch(fetchPopularSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchPopularFailure(error.message));
  }
};

export const fetchTopRated = () => async (dispatch) => {
  try {
    dispatch(fetchTopRatedStart());
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIE_KEY}&language=en-US`
    );
    dispatch(fetchTopRatedSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTopRatedFailure(error.message));
  }
};

export const fetchUpcoming = () => async (dispatch) => {
  try {
    dispatch(fetchUpcomingStart());
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIE_KEY}&language=en-US`
    );
    dispatch(fetchUpcomingSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchUpcomingFailure(error.message));
  }
};

export const fetchsearchMovie = (query) => async (dispatch) => {
  try {
    dispatch(fetchsearchMovieStart());
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_KEY}&query=${query}&language=en-US`
    );
    // console.log("index serarch", response.data.results);
    dispatch(fetchsearchMovieSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchsearchMovieFailure(error.message));
  }
};
export const addMovieToFavorites = (movie) => (dispatch) => {
  dispatch(addFavorite({ movie }));
};

// Action to remove a movie from favorites
export const removeMovieFromFavorites = (id) => (dispatch) => {
  dispatch(removeFavorite({ id }));
};
export default movieSlice.reducer;
