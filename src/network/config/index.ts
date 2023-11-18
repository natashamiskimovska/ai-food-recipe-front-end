import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

axiosInstance.interceptors.request.use(async (request: AxiosRequestConfig) => {
  if (request.headers === undefined) {
    request.headers = {};
  }
  let currentToken = localStorage.getItem("token");
  if (currentToken) {
    request.headers["Authorization"] = `Bearer ${currentToken}`;
  }

  return request;
});