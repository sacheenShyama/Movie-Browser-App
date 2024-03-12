import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.themoviedb.org/3/movie",
  headers: {
    "Content-Type": "application/json",
    Accept: "aplication/json",
  },
});

export default axiosInstance;
