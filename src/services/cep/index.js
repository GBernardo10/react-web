import axios from "axios";

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    crossorigin: true,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
