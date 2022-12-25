import axios from "axios";
const PATH_STORIES =
  "https://4625-2001-ee0-40c1-824a-e52b-9853-7fc3-6744.ap.ngrok.io/";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
  },
};

export const searchByPage = (page) => {
  let url = PATH_STORIES + "api/user/list?page=" + page;
  return axios.get(url);
};

export const searchByHome = () => {
  let url = PATH_STORIES + "home?page=1";
  return axios.get(url, config);
};

export const searchByName = (name) => {
  let url = PATH_STORIES + `api/search-story/${name}`;
  return axios.get(url);
};

export const searchCategoryList = () => {
  let url = PATH_STORIES + `api/category`;
  return axios.get(url);
};

export const searchByCategory = (id) => {
  let url = PATH_STORIES + `api/stories/${id}`;
  return axios.get(url);
};
