import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../Utils/AxiosInstance";

const initialState = {
  nowPlaying: [],
  popular: [], 
  topRated: [],
  upcoming: [],
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
      state.nowPlaying = action.payload;
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
      state.nowPlaying = action.payload;
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
      state.nowPlaying = action.payload;
      state.loading = false;
    },
    fetchUpcomingFailure(state, action) {
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
} = movieSlice.actions;

export const fetchNowPlaying = () => async (dispatch) => {
  try {
    dispatch(fetchNowPlayingStart());
    const response = await AxiosInstance.get(`movie/now_playing`, {
      params: {
        api_key: process.env.MOVIE_KEY,
      },
    });
    dispatch(fetchNowPlayingSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchNowPlayingFailure(error.message));
  }
};

export const fetchPopular = () => async (dispatch) => {
  try {
    dispatch(fetchPopularStart());
    const response = await AxiosInstance.get(`movie/popular`, {
      params: {
        api_key: process.env.MOVIE_KEY,
      },
    });
    dispatch(fetchPopularSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchPopularFailure(error.message));
  }
};

export const fetchTopRated = () => async (dispatch) => {
  try {
    dispatch(fetchTopRatedStart());
    const response = await AxiosInstance.get(`movie/top_rated`, {
      params: {
        api_key: process.env.MOVIE_KEY,
      },
    });
    dispatch(fetchTopRatedSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTopRatedFailure(error.message));
  }
};

export const fetchUpcoming = () => async (dispatch) => {
  try {
    dispatch(fetchUpcomingStart());
    const response = await AxiosInstance.get(`movie/upcoming`, {
      params: {
        api_key: process.env.MOVIE_KEY,
      },
    });
    dispatch(fetchUpcomingSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchUpcomingFailure(error.message));
  }
};

export default movieSlice.reducer;
