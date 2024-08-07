import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "475b29fd356be3c7b704712e5e9df99c";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
  return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
};
