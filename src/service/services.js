import axios from "axios";
const PATH_STORIES = "https://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list";

export const searchByPage = (page) => {
    let url = PATH_STORIES + "?page=" + page;
    return axios.get(url);
}