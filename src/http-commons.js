import axios from "axios";

const instance = axios.create({
  baseURL: "143.198.154.74:3000/api/v1",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default instance;
