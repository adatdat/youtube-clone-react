import axios from "axios";

const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: 'AIzaSyC5azdTBJbJT_g22_wYRlKO6LthdBGBdtA',
  },
});

export default request;
